/**
 * Complete Digital Menu Database
 * Accurately transcribed from physical menu cards
 */

const MENU_CATEGORIES = [
  { id: 'combos', name: "Combo's", icon: '🍱', description: 'Value meal deals with sides & drinks' },
  { id: 'pizza', name: 'Pizza', icon: '🍕', description: 'Freshly baked Medium size pizzas' },
  { id: 'burger', name: 'Burger', icon: '🍔', description: 'Juicy toasted burgers with fresh patties' },
  { id: 'sandwich', name: 'Sandwich', icon: '🥪', description: 'Grilled & toasted gourmet sandwiches' },
  { id: 'garlic-bread', name: 'Garlic Bread', icon: '🥖', description: 'Cheesy oven-baked garlic bread & toast' },
  { id: 'pasta', name: 'Pasta', icon: '🍝', description: 'Creamy Alfredo White & Arrabbiata Red sauce' },
  { id: 'fries-more', name: 'Fries & More', icon: '🍟', description: 'Crispy snacks, fries, nuggets & popcorn' },
  { id: 'momos', name: 'Momos', icon: '🥟', description: 'Steamed & flavorful dumplings' },
  { id: 'maggi', name: 'Maggi', icon: '🍜', description: 'Comfort masala noodles with toppings' },
  { id: 'milkshakes', name: 'Milk Shakes', icon: '🥤', description: 'Thick shakes, cold coffee & beverages' },
];

const MENU_ITEMS = [
  // --- COMBOS ---
  {
    id: 'combo-1',
    categoryId: 'combos',
    name: 'Veg Burger Combo',
    description: 'Burger + Fries + Coke',
    price: 100,
    isVeg: true,
    isBestseller: true,
    tag: 'SUPER SAVER',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'combo-2',
    categoryId: 'combos',
    name: 'Chicken Burger Combo',
    description: 'Burger + Fries + Coke',
    price: 110,
    isVeg: false,
    isBestseller: true,
    tag: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'combo-3',
    categoryId: 'combos',
    name: 'Veg Pizza Combo',
    description: 'Pizza + Garlic Bread + Coke',
    price: 150,
    isVeg: true,
    isBestseller: true,
    tag: 'MUST TRY',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'combo-4',
    categoryId: 'combos',
    name: 'Chicken Pizza Combo',
    description: 'Pizza + Garlic Bread + Coke',
    price: 170,
    isVeg: false,
    isBestseller: true,
    tag: 'SPECIAL',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'combo-5',
    categoryId: 'combos',
    name: 'Veg Sandwich Combo',
    description: 'Sandwich + Cold Coffee',
    price: 80,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20 | With Ice-cream: +₹20'
  },
  {
    id: 'combo-6',
    categoryId: 'combos',
    name: 'Chicken Sandwich Combo',
    description: 'Sandwich + Coffee',
    price: 90,
    isVeg: false,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- PIZZA ---
  {
    id: 'piz-1',
    categoryId: 'pizza',
    name: 'Margherita Pizza',
    description: 'Only cheese topping on a freshly baked crust',
    price: 80,
    size: 'Med.',
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'piz-2',
    categoryId: 'pizza',
    name: 'Cheese & Corn Pizza',
    description: 'Loaded with melted cheese & sweet golden corn',
    price: 80,
    size: 'Med.',
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'piz-3',
    categoryId: 'pizza',
    name: 'Farm Fresh Pizza',
    description: 'Onion, fresh tomato, capsicum & mozzarella cheese',
    price: 80,
    size: 'Med.',
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'piz-4',
    categoryId: 'pizza',
    name: 'Tandoori Paneer Pizza',
    description: 'Paneer, onion, capsicum, tomato & rich cheese',
    price: 120,
    size: 'Med.',
    isVeg: true,
    isBestseller: true,
    tag: 'CHEF SPECIAL',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'piz-5',
    categoryId: 'pizza',
    name: 'Tandoori Chicken Pizza',
    description: 'Chicken, onion, capsicum, tomato & melted cheese',
    price: 120,
    size: 'Med.',
    isVeg: false,
    isBestseller: true,
    tag: 'HOT SELLER',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- BURGER ---
  {
    id: 'burg-1',
    categoryId: 'burger',
    name: 'Veg Burger',
    description: 'Crispy seasoned vegetable patty with fresh salad & house sauce',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'burg-2',
    categoryId: 'burger',
    name: 'Cheese Burger',
    description: 'Crispy veg patty topped with melted cheese slice & dressing',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'burg-3',
    categoryId: 'burger',
    name: 'Paneer Burger',
    description: 'Grilled spiced paneer patty with lettuce and creamy mayo',
    price: 60,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'burg-4',
    categoryId: 'burger',
    name: 'Paneer Cheese Burger',
    description: 'Grilled spiced paneer patty layered with melted cheese slice',
    price: 70,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'burg-5',
    categoryId: 'burger',
    name: 'Chicken Burger',
    description: 'Tender grilled chicken patty with fresh crisp veggies & mayo',
    price: 60,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'burg-6',
    categoryId: 'burger',
    name: 'Chicken Cheese Burger',
    description: 'Juicy chicken patty layered with melted cheese & sauce',
    price: 70,
    isVeg: false,
    isBestseller: true,
    tag: 'CUSTOMER FAV',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- SANDWICH ---
  {
    id: 'sand-1',
    categoryId: 'sandwich',
    name: 'Bread Butter',
    description: 'Soft buttered fresh bread slices',
    price: 30,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'sand-2',
    categoryId: 'sandwich',
    name: 'Bread Butter Toast',
    description: 'Crispy golden toasted bread with rich butter',
    price: 40,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-3',
    categoryId: 'sandwich',
    name: 'Chocolate Sandwich',
    description: 'Grilled sandwich loaded with sweet decadent chocolate',
    price: 50,
    isVeg: true,
    isBestseller: true,
    tag: 'KIDS FAV',
    image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'sand-4',
    categoryId: 'sandwich',
    name: 'Veg Sandwich',
    description: 'Fresh sliced vegetables with mint chutney & seasonings',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-5',
    categoryId: 'sandwich',
    name: 'Veg Cheese Sandwich',
    description: 'Fresh vegetables topped with gooey melted cheese, grilled hot',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-6',
    categoryId: 'sandwich',
    name: 'Cheese Corn Sandwich',
    description: 'Sweet golden corn mixed with melted mozzarella cheese',
    price: 50,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-7',
    categoryId: 'sandwich',
    name: 'Coleslaw Sandwich',
    description: 'Creamy chilled shredded cabbage & carrots in herb dressing',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-8',
    categoryId: 'sandwich',
    name: 'Paneer Tikka Sandwich',
    description: 'Spiced marinated paneer chunks grilled with onion & capsicum',
    price: 60,
    isVeg: true,
    isBestseller: true,
    tag: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'sand-9',
    categoryId: 'sandwich',
    name: 'Chicken Tikka Sandwich',
    description: 'Succulent spiced chicken tikka pieces in toasted crispy bread',
    price: 60,
    isVeg: false,
    isBestseller: true,
    tag: 'HOT SELLER',
    image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- GARLIC BREAD ---
  {
    id: 'gb-1',
    categoryId: 'garlic-bread',
    name: 'Cheese Garlic Bread',
    description: 'Garlic buttered baguette toasted with 100% mozzarella cheese',
    price: 50,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'gb-2',
    categoryId: 'garlic-bread',
    name: 'Cheese Chilli Toast',
    description: 'Toasted bread loaded with melted cheese, green chillies & spice',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'gb-3',
    categoryId: 'garlic-bread',
    name: 'Paneer Cheese Garlic Bread',
    description: 'Garlic bread topped with marinated paneer & bubbling cheese',
    price: 80,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'gb-4',
    categoryId: 'garlic-bread',
    name: 'Chicken Cheese Garlic Bread',
    description: 'Oven baked garlic bread loaded with tender chicken & cheese',
    price: 80,
    isVeg: false,
    isBestseller: true,
    tag: 'FAVORITE',
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- PASTA ---
  {
    id: 'pas-1',
    categoryId: 'pasta',
    name: 'Alfredo Pasta (White Sauce)',
    description: 'Penne pasta tossed in rich, velvety white cream sauce with herbs',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'pas-2',
    categoryId: 'pasta',
    name: 'Arrabbiata Pasta (Red Sauce)',
    description: 'Penne pasta cooked in zesty, spiced Italian red tomato sauce',
    price: 60,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'pas-3',
    categoryId: 'pasta',
    name: 'Alfredo Paneer Pasta (White Sauce)',
    description: 'Creamy white sauce pasta enriched with tender cottage cheese cubes',
    price: 80,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'pas-4',
    categoryId: 'pasta',
    name: 'Alfredo Chicken Pasta (White Sauce)',
    description: 'Signature creamy white sauce pasta loaded with seasoned chicken',
    price: 80,
    isVeg: false,
    isBestseller: true,
    tag: 'MUST TRY',
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'pas-5',
    categoryId: 'pasta',
    name: 'Arrabbiata Paneer Pasta (Red Sauce)',
    description: 'Spiced red sauce pasta tossed with fresh paneer cubes',
    price: 80,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'pas-6',
    categoryId: 'pasta',
    name: 'Arrabbiata Chicken Pasta (Red Sauce)',
    description: 'Tangy red sauce pasta infused with juicy chicken & Italian herbs',
    price: 80,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- FRIES & MORE ---
  {
    id: 'fr-1',
    categoryId: 'fries-more',
    name: 'Aloo Tikki',
    description: 'Crispy spiced potato patties served with dipping sauces',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'fr-2',
    categoryId: 'fries-more',
    name: 'Regular French Fries',
    description: 'Classic salted golden crispy potato french fries',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'fr-3',
    categoryId: 'fries-more',
    name: 'Peri Peri French Fries',
    description: 'Crispy french fries tossed in spicy tangy peri-peri seasoning',
    price: 60,
    isVeg: true,
    isBestseller: true,
    tag: 'HOT SELLER',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'fr-4',
    categoryId: 'fries-more',
    name: 'Cheesy French Fries',
    description: 'Hot crisp fries drizzled with generous melted cheese sauce',
    price: 70,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'fr-5',
    categoryId: 'fries-more',
    name: 'Loaded French Fries',
    description: 'Fries loaded with cheese sauce, toppings & cafe spices',
    price: 80,
    isVeg: true,
    isBestseller: true,
    tag: 'CHEF PICK',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'fr-6',
    categoryId: 'fries-more',
    name: 'Chicken Nuggets',
    description: 'Bite-sized golden crispy chicken nuggets with mayo dip',
    price: 60,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'fr-7',
    categoryId: 'fries-more',
    name: 'Chicken Popcorn',
    description: 'Crunchy, seasoned fried mini chicken popcorn chunks',
    price: 60,
    isVeg: false,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },

  // --- MOMOS ---
  {
    id: 'mo-1',
    categoryId: 'momos',
    name: 'Veg Momos',
    description: 'Steamed dumplings filled with finely chopped spiced vegetables',
    price: 50,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'mo-2',
    categoryId: 'momos',
    name: 'Paneer Momos',
    description: 'Steamed momos stuffed with rich seasoned cottage cheese & herbs',
    price: 60,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },
  {
    id: 'mo-3',
    categoryId: 'momos',
    name: 'Chicken Momos',
    description: 'Juicy steamed momos packed with minced chicken & herbs',
    price: 60,
    isVeg: false,
    isBestseller: true,
    tag: 'MUST ORDER',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=400&q=80',
    addonNote: null
  },

  // --- MAGGI ---
  {
    id: 'mag-1',
    categoryId: 'maggi',
    name: 'Plain Classic Maggi',
    description: 'Classic nostalgia-filled 2-minute masala Maggi noodles',
    price: 30,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'mag-2',
    categoryId: 'maggi',
    name: 'Vegetable Maggi',
    description: 'Maggi tossed with sauteed onions, tomatoes, peas & capsicum',
    price: 40,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1594834749740-74b3f6764be4?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'mag-3',
    categoryId: 'maggi',
    name: 'Peri Peri Maggi',
    description: 'Spiced up Maggi infused with hot peri-peri seasoning',
    price: 50,
    isVeg: true,
    isBestseller: false,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'mag-4',
    categoryId: 'maggi',
    name: 'Paneer Maggi',
    description: 'Comforting Maggi topped with soft spiced paneer cubes',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },
  {
    id: 'mag-5',
    categoryId: 'maggi',
    name: 'Chicken Maggi',
    description: 'Spiced Maggi noodles prepared with juicy shredded chicken',
    price: 60,
    isVeg: false,
    isBestseller: true,
    tag: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=400&q=80',
    addonNote: 'Extra Cheese: +₹20'
  },

  // --- MILK SHAKES & BEVERAGES ---
  {
    id: 'shk-1',
    categoryId: 'milkshakes',
    name: 'Cold Coffee',
    description: 'Creamy, frothy iced coffee blended with milk & chocolate drizzle',
    price: 50,
    isVeg: true,
    isBestseller: true,
    tag: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
    addonNote: 'With Ice-cream: +₹20'
  },
  {
    id: 'shk-2',
    categoryId: 'milkshakes',
    name: 'Chocolate Milk Shake',
    description: 'Thick rich chocolate shake blended with premium cocoa syrup',
    price: 60,
    isVeg: true,
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80',
    addonNote: 'With Ice-cream: +₹20'
  },
  {
    id: 'shk-3',
    categoryId: 'milkshakes',
    name: 'Oreo Milk Shake',
    description: 'Crunchy crushed Oreo cookies whipped into a thick creamy shake',
    price: 60,
    isVeg: true,
    isBestseller: true,
    tag: 'MUST TRY',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80',
    addonNote: 'With Ice-cream: +₹20'
  }
];

const RESTAURANT_CONFIG = {
  name: 'CAFE BISTRO & SNACKS',
  tagline: 'Quick Bites • Burgers • Pizzas • Shakes',
  phone: '+919876543210',
  address: 'Shop No. 4, Food Street, Near College Campus',
  timing: '11:00 AM – 11:00 PM (Everyday)',
  wifiName: 'Cafe_Guest_WiFi',
  wifiPass: 'enjoyfood2026',
  currency: '₹'
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_CONFIG };
}
