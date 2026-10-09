/**
 * Pure Digital Menu Website Application Logic
 * Optimized for mobile web viewing, quick search, and smooth browsing
 */

const state = {
  activeFilter: 'all', // 'all', 'veg', 'non-veg', 'bestseller', 'under100'
  searchQuery: '',
  viewMode: 'cards', // 'cards' (rich visual) or 'compact' (classic cafe list)
  currentTable: null,
  isDarkMode: false
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  loadPreferences();
  parseTableParam();
  renderCategoryTabs();
  renderMenu();
  setupScrollSpy();
  setupEventListeners();
  lucide.createIcons();
});

// --- URL & LocalStorage ---
function parseTableParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const table = urlParams.get('table') || urlParams.get('t') || urlParams.get('tbl');
  if (table) {
    state.currentTable = table;
    const badge = document.getElementById('table-indicator');
    if (badge) {
      badge.innerHTML = `<span class="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Table #${table}</span>`;
      badge.classList.remove('hidden');
    }
  }
}

function loadPreferences() {
  const savedTheme = localStorage.getItem('cafe_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  }

  const savedView = localStorage.getItem('cafe_view_mode');
  if (savedView && (savedView === 'cards' || savedView === 'compact')) {
    state.viewMode = savedView;
  }
  updateViewModeButtons();
}

// --- Dark Mode ---
function setDarkMode(isDark) {
  state.isDarkMode = isDark;
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('cafe_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('cafe_theme', 'light');
  }
}

function toggleTheme() {
  setDarkMode(!state.isDarkMode);
  showToast(state.isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode');
}

// --- View Mode Toggle (Cards vs Compact) ---
function setViewMode(mode) {
  if (state.viewMode === mode) return;
  state.viewMode = mode;
  localStorage.setItem('cafe_view_mode', mode);
  updateViewModeButtons();
  renderMenu();
}

function updateViewModeButtons() {
  const btnCards = document.getElementById('view-btn-cards');
  const btnCompact = document.getElementById('view-btn-compact');
  if (!btnCards || !btnCompact) return;

  if (state.viewMode === 'cards') {
    btnCards.classList.add('bg-orange-600', 'text-white');
    btnCards.classList.remove('text-slate-400');
    btnCompact.classList.remove('bg-orange-600', 'text-white');
    btnCompact.classList.add('text-slate-400');
  } else {
    btnCompact.classList.add('bg-orange-600', 'text-white');
    btnCompact.classList.remove('text-slate-400');
    btnCards.classList.remove('bg-orange-600', 'text-white');
    btnCards.classList.add('text-slate-400');
  }
}

// --- Category Tabs Navigation ---
function renderCategoryTabs() {
  const container = document.getElementById('category-tabs');
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map((cat, idx) => `
    <button 
      onclick="scrollToCategory('${cat.id}')" 
      id="tab-${cat.id}" 
      class="category-pill flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${idx === 0 ? 'active' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}"
    >
      <span class="text-sm">${cat.icon}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function scrollToCategory(categoryId) {
  const section = document.getElementById(`cat-${categoryId}`);
  if (!section) return;

  const header = document.getElementById('sticky-tabs-header');
  const headerOffset = (header ? header.offsetHeight : 50) + 8;
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  setActiveTab(categoryId);
}

function setActiveTab(categoryId) {
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.classList.remove('active');
    pill.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
  });

  const activePill = document.getElementById(`tab-${categoryId}`);
  if (activePill) {
    activePill.classList.add('active');
    activePill.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
    activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

// --- Scroll Spy ---
function setupScrollSpy() {
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (isScrolling) return;
    isScrolling = true;

    requestAnimationFrame(() => {
      const scrollPos = window.pageYOffset + 130;
      let currentId = '';

      MENU_CATEGORIES.forEach(cat => {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el && el.offsetTop <= scrollPos) {
          currentId = cat.id;
        }
      });

      if (currentId) {
        setActiveTab(currentId);
      }
      isScrolling = false;
    });
  }, { passive: true });
}

// --- Render Menu Items ---
function renderMenu() {
  const container = document.getElementById('menu-content-container');
  if (!container) return;

  const filtered = MENU_ITEMS.filter(item => {
    // Search
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.categoryId.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }

    // Filter
    if (state.activeFilter === 'veg' && !item.isVeg) return false;
    if (state.activeFilter === 'non-veg' && item.isVeg) return false;
    if (state.activeFilter === 'bestseller' && !item.isBestseller) return false;
    if (state.activeFilter === 'under100' && item.price > 100) return false;

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center px-4">
        <div class="w-14 h-14 mx-auto mb-3 bg-amber-100 dark:bg-amber-950/50 rounded-full flex items-center justify-center text-2xl">
          🔍
        </div>
        <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">No matching dishes</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
          We couldn't find anything matching your filter.
        </p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-orange-600 text-white rounded-full text-xs font-semibold shadow-md active:scale-95 transition">
          View All Items
        </button>
      </div>
    `;
    return;
  }

  let html = '';

  MENU_CATEGORIES.forEach(cat => {
    const categoryItems = filtered.filter(item => item.categoryId === cat.id);
    if (categoryItems.length === 0) return;

    html += `
      <section id="cat-${cat.id}" class="pt-5 pb-2">
        <!-- Category Header -->
        <div class="px-4 mb-2.5 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl">${cat.icon}</span>
            <h2 class="text-base font-black text-slate-900 dark:text-white uppercase font-heading tracking-tight">
              ${cat.name}
            </h2>
            <span class="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold px-2 py-0.5 rounded-full">
              ${categoryItems.length}
            </span>
          </div>
          <span class="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
            ${cat.description}
          </span>
        </div>

        <!-- Items Container -->
        <div class="bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/80">
          ${categoryItems.map(item => state.viewMode === 'cards' ? renderCardItem(item) : renderCompactItem(item)).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// 1. Rich Visual Card Item View
function renderCardItem(item) {
  const vegIcon = item.isVeg ? '<div class="veg-icon" title="Veg"></div>' : '<div class="non-veg-icon" title="Non-Veg"></div>';

  return `
    <div class="p-4 flex gap-3.5 items-center hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition">
      <!-- Left Content -->
      <div class="flex-1 min-w-0 pr-1">
        <div class="flex items-center gap-2 mb-1">
          ${vegIcon}
          ${item.tag ? `
            <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              ${item.tag}
            </span>
          ` : (item.isBestseller ? `
            <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30">
              BESTSELLER
            </span>
          ` : '')}
          ${item.size ? `<span class="text-[10px] text-slate-400 font-bold">(${item.size})</span>` : ''}
        </div>

        <h3 class="font-bold text-sm text-slate-900 dark:text-white leading-snug">
          ${item.name}
        </h3>

        <div class="mt-1 flex items-baseline gap-2">
          <span class="font-extrabold text-slate-900 dark:text-white text-base font-heading">
            ${RESTAURANT_CONFIG.currency}${item.price}/-
          </span>
        </div>

        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
          ${item.description}
        </p>

        ${item.addonNote ? `
          <div class="mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded-md border border-orange-200 dark:border-orange-900/50">
            <span>✨</span> ${item.addonNote}
          </div>
        ` : ''}
      </div>

      <!-- Right Image -->
      <div class="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          loading="lazy" 
          class="w-full h-full object-cover"
          onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80'"
        />
      </div>
    </div>
  `;
}

// 2. Compact Cafe List View (Traditional menu card style)
function renderCompactItem(item) {
  const vegIcon = item.isVeg ? '<div class="veg-icon" title="Veg"></div>' : '<div class="non-veg-icon" title="Non-Veg"></div>';

  return `
    <div class="p-3.5 hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition">
      <div class="flex items-start justify-between gap-2">
        <div class="flex items-start gap-2 flex-1 min-w-0">
          <div class="mt-1">${vegIcon}</div>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h3 class="font-bold text-xs text-slate-900 dark:text-white">
                ${item.name}
              </h3>
              ${item.size ? `<span class="text-[10px] text-slate-400 font-semibold">(${item.size})</span>` : ''}
              ${item.isBestseller ? `<span class="text-[8px] bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 font-bold px-1 rounded">HOT</span>` : ''}
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              ${item.description}
            </p>
            ${item.addonNote ? `
              <div class="text-[10px] text-orange-600 dark:text-orange-400 font-semibold mt-0.5">
                ${item.addonNote}
              </div>
            ` : ''}
          </div>
        </div>

        <div class="text-right flex-shrink-0">
          <div class="font-extrabold text-sm text-slate-900 dark:text-white font-heading">
            ${RESTAURANT_CONFIG.currency}${item.price}/-
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Filters & Search ---
function setFilter(filterType) {
  state.activeFilter = filterType;

  document.querySelectorAll('.filter-chip').forEach(btn => {
    btn.classList.remove('bg-orange-600', 'text-white', 'border-orange-600');
    btn.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
  });

  const activeBtn = document.getElementById(`filter-btn-${filterType}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
    activeBtn.classList.add('bg-orange-600', 'text-white', 'border-orange-600');
  }

  renderMenu();
}

function resetFilters() {
  state.searchQuery = '';
  state.activeFilter = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  setFilter('all');
}

// --- Share Menu Link ---
function shareMenu() {
  if (navigator.share) {
    navigator.share({
      title: RESTAURANT_CONFIG.name,
      text: `Check out the menu of ${RESTAURANT_CONFIG.name}!`,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('📋 Menu link copied to clipboard!');
  }
}

// --- Modal & Toast Helpers ---
function openInfoModal() {
  const modal = document.getElementById('info-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2200);
}

// --- Global Event Listeners ---
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderMenu();
    });
  }
}
