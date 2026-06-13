const RECIPES = [
  // === BREAKFAST - VEG ===
  {
    id: 1, name: "Masala Dosa", category: "breakfast", type: "veg",
    region: "South India", time: 30, servings: 2, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
    description: "Crispy golden crepes stuffed with spiced potato filling, served with coconut chutney and sambar.",
    ingredients: ["2 cups dosa batter", "3 potatoes boiled", "1 onion", "2 green chilies", "1 tsp mustard seeds", "curry leaves", "turmeric", "salt", "oil"],
    steps: [
      "Heat a flat griddle on medium-high flame and lightly grease with oil.",
      "Pour a ladle of dosa batter and spread in circular motion to make a thin crepe.",
      "Drizzle oil around edges and cook until golden and crispy.",
      "Meanwhile, mash boiled potatoes with sautéed onion, green chilies, mustard seeds, turmeric, and curry leaves.",
      "Place potato filling in center of dosa, fold and serve hot with coconut chutney and sambar."
    ],
    tags: ["crispy", "south-indian", "popular"], rating: 4.8, reviews: []
  },
  {
    id: 2, name: "Poha", category: "breakfast", type: "veg",
    region: "Central India", time: 15, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    description: "Light flattened rice dish tossed with onions, peas, and aromatic spices.",
    ingredients: ["2 cups flattened rice", "1 onion", "1/2 cup peas", "2 green chilies", "1 tsp mustard seeds", "turmeric", "lemon juice", "coriander", "salt"],
    steps: [
      "Rinse flattened rice in water, drain and set aside for 5 minutes.",
      "Heat oil, add mustard seeds and let them splutter.",
      "Add onions, green chilies, and cook until translucent.",
      "Add peas, turmeric, and salt. Cook for 2 minutes.",
      "Add soaked poha, toss gently. Squeeze lemon and garnish with coriander."
    ],
    tags: ["light", "quick", "maharashtrian"], rating: 4.5, reviews: []
  },
  {
    id: 3, name: "Idli Sambar", category: "breakfast", type: "veg",
    region: "South India", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&q=80",
    description: "Soft steamed rice cakes served with lentil vegetable soup and chutneys.",
    ingredients: ["2 cups idli batter", "1 cup toor dal", "vegetables", "tamarind", "sambar powder", "tomatoes", "onion", "mustard seeds", "curry leaves"],
    steps: [
      "Pour idli batter into greased idli molds.",
      "Steam for 10-12 minutes until a toothpick comes out clean.",
      "Cook toor dal until soft. Add tamarind water, vegetables, and sambar powder.",
      "Temper with mustard seeds, curry leaves, and pour over dal.",
      "Serve hot idlis with sambar and coconut chutney."
    ],
    tags: ["healthy", "steamed", "south-indian"], rating: 4.7, reviews: []
  },
  {
    id: 4, name: "Aloo Paratha", category: "breakfast", type: "veg",
    region: "Punjab", time: 30, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    description: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with butter and yogurt.",
    ingredients: ["2 cups wheat flour", "3 potatoes", "2 green chilies", "ginger", "coriander", "cumin", "red chili powder", "butter", "salt"],
    steps: [
      "Make soft wheat dough. Boil and mash potatoes with spices.",
      "Divide dough into balls. Flatten, add potato filling in center.",
      "Seal edges and roll gently into a flat circle.",
      "Cook on hot griddle with butter until golden spots appear on both sides.",
      "Serve hot with yogurt, pickle, and extra butter."
    ],
    tags: ["punjabi", "filling", "comfort"], rating: 4.9, reviews: []
  },
  {
    id: 5, name: "Upma", category: "breakfast", type: "veg",
    region: "South India", time: 20, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Savory semolina porridge with vegetables and South Indian tempering.",
    ingredients: ["1 cup semolina", "1 onion", "2 green chilies", "ginger", "mustard seeds", "curry leaves", "mixed vegetables", "ghee", "salt", "water"],
    steps: [
      "Dry roast semolina until light golden. Set aside.",
      "Heat ghee, add mustard seeds, curry leaves, and green chilies.",
      "Add onions and ginger, sauté until soft.",
      "Add vegetables and cook briefly. Pour 2 cups water and bring to boil.",
      "Add roasted semolina slowly, stirring continuously. Cook until thick and serve hot."
    ],
    tags: ["quick", "healthy", "semolina"], rating: 4.3, reviews: []
  },
  {
    id: 6, name: "Besan Chilla", category: "breakfast", type: "veg",
    region: "North India", time: 20, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Savory chickpea flour pancakes with vegetables and spices.",
    ingredients: ["1 cup chickpea flour", "onion", "tomato", "green chilies", "ginger", "cumin", "turmeric", "ajwain", "oil", "salt"],
    steps: [
      "Mix chickpea flour with water to make smooth batter.",
      "Add finely chopped onion, tomato, chilies, ginger, and all spices.",
      "Heat a griddle and pour batter to make thin pancakes.",
      "Drizzle oil on sides and cook until crispy and golden.",
      "Serve hot with green chutney."
    ],
    tags: ["protein-rich", "quick", "nutritious"], rating: 4.6, reviews: []
  },
  {
    id: 7, name: "Methi Thepla", category: "breakfast", type: "veg",
    region: "Gujarat", time: 25, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Thin flatbread made with fenugreek leaves, yogurt, and aromatic spices.",
    ingredients: ["2 cups wheat flour", "1 cup fenugreek leaves", "yogurt", "green chilies", "ginger", "turmeric", "sesame seeds", "oil", "salt"],
    steps: [
      "Mix flour with fenugreek leaves, yogurt, spices, and oil.",
      "Knead into smooth soft dough adding water as needed.",
      "Divide into balls and roll thinly.",
      "Cook on hot griddle with oil on both sides.",
      "Serve with pickle, yogurt, or tea."
    ],
    tags: ["gujarati", "healthy", "travel-friendly"], rating: 4.5, reviews: []
  },
  {
    id: 8, name: "Pesarattu", category: "breakfast", type: "veg",
    region: "Andhra Pradesh", time: 25, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    description: "Green moong dal crepes packed with protein, served with ginger chutney.",
    ingredients: ["1 cup green moong dal", "ginger", "green chilies", "onion", "cumin", "salt", "oil"],
    steps: [
      "Soak moong dal for 4 hours, drain and grind to smooth batter.",
      "Add ginger, chilies, cumin, and salt to batter.",
      "Heat griddle, pour batter and spread thinly.",
      "Add chopped onion on top, drizzle oil.",
      "Cook until crispy, fold and serve with ginger chutney."
    ],
    tags: ["andhra", "protein", "healthy"], rating: 4.4, reviews: []
  },

  // === LUNCH - VEG ===
  {
    id: 9, name: "Dal Tadka", category: "lunch", type: "veg",
    region: "North India", time: 35, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
    description: "Yellow lentils tempered with garlic, cumin, and dried red chilies — a comfort classic.",
    ingredients: ["1 cup yellow dal", "tomatoes", "onion", "garlic", "ginger", "cumin", "mustard seeds", "red chilies", "turmeric", "ghee", "coriander"],
    steps: [
      "Pressure cook dal with turmeric until soft.",
      "Sauté onions, ginger, garlic until golden.",
      "Add tomatoes and cook until mushy. Add spices.",
      "Add cooked dal, simmer 10 minutes.",
      "Prepare tadka: heat ghee, add cumin, red chilies, garlic. Pour over dal and garnish with coriander."
    ],
    tags: ["comfort", "everyday", "protein"], rating: 4.7, reviews: []
  },
  {
    id: 10, name: "Paneer Butter Masala", category: "lunch", type: "veg",
    region: "North India", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    description: "Cottage cheese cubes in rich, creamy tomato-cashew gravy with aromatic spices.",
    ingredients: ["300g paneer", "tomatoes", "cashews", "onion", "butter", "cream", "ginger-garlic paste", "kashmiri chili", "garam masala", "kasoori methi"],
    steps: [
      "Blend tomatoes, cashews, and onion into smooth paste.",
      "Cook paste in butter until oil separates.",
      "Add ginger-garlic paste, spices and cook 5 minutes.",
      "Add paneer cubes and cream. Simmer 10 minutes.",
      "Finish with kasoori methi and serve with naan or rice."
    ],
    tags: ["restaurant-style", "creamy", "popular"], rating: 4.9, reviews: []
  },
  {
    id: 11, name: "Chole Bhature", category: "lunch", type: "veg",
    region: "Punjab", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Spicy chickpeas served with fluffy deep-fried bread — a beloved Punjabi feast.",
    ingredients: ["2 cups chickpeas", "onion", "tomatoes", "tea bag", "chole masala", "ginger-garlic", "2 cups flour", "yogurt", "baking soda", "oil"],
    steps: [
      "Soak chickpeas overnight. Cook with tea bag for dark color.",
      "Make bhatura dough with flour, yogurt, soda, and rest 2 hours.",
      "Cook chickpeas with onion-tomato masala and chole spices.",
      "Roll bhaturas and deep fry until puffed and golden.",
      "Serve hot chole with bhaturas, pickle, and onion slices."
    ],
    tags: ["punjabi", "festival", "indulgent"], rating: 4.8, reviews: []
  },
  {
    id: 12, name: "Rajma Chawal", category: "lunch", type: "veg",
    region: "North India", time: 50, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
    description: "Kidney beans in thick tomato-onion gravy served over steamed basmati rice.",
    ingredients: ["1 cup kidney beans", "onion", "tomatoes", "ginger-garlic", "rajma masala", "cumin", "ghee", "basmati rice", "coriander"],
    steps: [
      "Soak rajma overnight. Pressure cook until tender.",
      "Make masala with onion, tomatoes, ginger-garlic and spices.",
      "Add cooked rajma to masala and simmer 15 minutes.",
      "Cook basmati rice separately.",
      "Serve rajma over rice with ghee and pickled onions."
    ],
    tags: ["comfort", "protein", "everyday"], rating: 4.7, reviews: []
  },
  {
    id: 13, name: "Baingan Bharta", category: "lunch", type: "veg",
    region: "Punjab", time: 40, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Smoky roasted eggplant mashed with onions, tomatoes, and earthy spices.",
    ingredients: ["2 large eggplants", "onion", "tomatoes", "garlic", "green chilies", "ginger", "cumin", "coriander powder", "garam masala", "oil", "coriander"],
    steps: [
      "Roast eggplants directly on flame until charred all over.",
      "Peel off skin, mash the flesh.",
      "Sauté onions and garlic until golden.",
      "Add tomatoes, chilies, and all spices. Cook until thick.",
      "Add mashed eggplant, mix well and cook 5 more minutes. Garnish and serve."
    ],
    tags: ["smoky", "rustic", "punjabi"], rating: 4.6, reviews: []
  },
  {
    id: 14, name: "Palak Paneer", category: "lunch", type: "veg",
    region: "North India", time: 35, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
    description: "Cottage cheese in velvety spinach gravy seasoned with garam masala.",
    ingredients: ["300g paneer", "500g spinach", "onion", "tomatoes", "garlic", "ginger", "cream", "kasuri methi", "garam masala", "butter"],
    steps: [
      "Blanch spinach, blend into smooth puree.",
      "Sauté onions, add ginger-garlic, tomatoes and cook well.",
      "Add spinach puree and spices. Simmer 10 minutes.",
      "Add paneer cubes and cream.",
      "Finish with kasoori methi and serve with roti."
    ],
    tags: ["healthy", "iron-rich", "restaurant-style"], rating: 4.8, reviews: []
  },
  {
    id: 15, name: "Sambar Rice", category: "lunch", type: "veg",
    region: "Tamil Nadu", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    description: "Rice cooked with lentil and vegetable stew, a South Indian soul food.",
    ingredients: ["2 cups rice", "1 cup toor dal", "vegetables", "tamarind", "sambar powder", "tomatoes", "mustard seeds", "curry leaves", "ghee"],
    steps: [
      "Cook rice and dal together or separately.",
      "Make sambar with tamarind, vegetables, tomatoes, sambar powder.",
      "Temper with ghee, mustard seeds, curry leaves.",
      "Mix sambar with rice or serve alongside.",
      "Drizzle ghee on top and serve with papad."
    ],
    tags: ["south-indian", "comfort", "wholesome"], rating: 4.5, reviews: []
  },
  {
    id: 16, name: "Kadhi Pakora", category: "lunch", type: "veg",
    region: "North India", time: 45, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
    description: "Yogurt-chickpea flour curry with fluffy fritters — tangy, comforting bliss.",
    ingredients: ["1 cup yogurt", "chickpea flour", "onion", "ginger", "fenugreek seeds", "turmeric", "red chili", "oil", "coriander"],
    steps: [
      "Make pakora batter with chickpea flour, spices, onion. Deep fry.",
      "Whisk yogurt with chickpea flour and turmeric.",
      "Temper fenugreek seeds and cook yogurt mixture 30 minutes.",
      "Add pakoras to curry, simmer 5 minutes.",
      "Temper with ghee, red chilies, and serve with rice."
    ],
    tags: ["tangy", "punjabi", "weekend"], rating: 4.7, reviews: []
  },
  {
    id: 17, name: "Matar Paneer", category: "lunch", type: "veg",
    region: "North India", time: 35, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    description: "Green peas and cottage cheese in a flavorful tomato-onion gravy.",
    ingredients: ["200g paneer", "1 cup peas", "onion", "tomatoes", "ginger-garlic", "cumin", "coriander powder", "garam masala", "oil", "cream"],
    steps: [
      "Sauté onions until golden, add ginger-garlic paste.",
      "Add tomatoes and cook until mushy.",
      "Add all spices and cook until oil separates.",
      "Add peas and paneer cubes. Simmer 10 minutes.",
      "Add cream, garnish with coriander and serve."
    ],
    tags: ["easy", "everyday", "kids-friendly"], rating: 4.6, reviews: []
  },
  {
    id: 18, name: "Vegetable Biryani", category: "lunch", type: "veg",
    region: "Hyderabad", time: 60, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    description: "Fragrant basmati rice layered with spiced vegetables, saffron, and fried onions.",
    ingredients: ["3 cups basmati rice", "mixed vegetables", "yogurt", "biryani masala", "saffron", "fried onions", "ghee", "mint", "rose water", "whole spices"],
    steps: [
      "Parboil rice with whole spices until 70% cooked.",
      "Cook vegetables with biryani masala and yogurt.",
      "Layer rice over vegetable masala in heavy pot.",
      "Top with saffron milk, fried onions, and mint.",
      "Cook on dum (sealed, slow heat) for 20 minutes. Gently mix and serve."
    ],
    tags: ["royal", "festival", "aromatic"], rating: 4.9, reviews: []
  },
  {
    id: 19, name: "Saag Aloo", category: "lunch", type: "veg",
    region: "Punjab", time: 30, servings: 3, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    description: "Potatoes cooked with mustard greens and spinach in a rustic Punjabi style.",
    ingredients: ["3 potatoes", "2 cups mustard greens", "1 cup spinach", "onion", "garlic", "ginger", "cumin", "turmeric", "ghee"],
    steps: [
      "Chop and blanch greens, coarsely grind.",
      "Fry potatoes until golden. Drain.",
      "Sauté onion, garlic, ginger. Add spices.",
      "Add greens and potatoes. Cook covered 15 minutes.",
      "Finish with ghee and serve with makki ki roti."
    ],
    tags: ["rustic", "winter", "punjabi"], rating: 4.4, reviews: []
  },
  {
    id: 20, name: "Avial", category: "lunch", type: "veg",
    region: "Kerala", time: 35, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
    description: "Mixed vegetables cooked in coconut-yogurt gravy — Kerala's signature side dish.",
    ingredients: ["mixed vegetables", "coconut", "yogurt", "green chilies", "cumin", "turmeric", "curry leaves", "coconut oil"],
    steps: [
      "Grind coconut with cumin and green chilies.",
      "Cook vegetables in water with turmeric until tender.",
      "Add coconut paste and cook 5 minutes.",
      "Remove from heat, add yogurt and mix.",
      "Temper with coconut oil and curry leaves."
    ],
    tags: ["kerala", "coconut", "traditional"], rating: 4.5, reviews: []
  },

  // === DINNER - VEG ===
  {
    id: 21, name: "Dal Makhani", category: "dinner", type: "veg",
    region: "Punjab", time: 90, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
    description: "Slow-cooked black lentils in a buttery, creamy, tomato-rich sauce — a north Indian legend.",
    ingredients: ["1 cup black urad dal", "rajma", "butter", "cream", "tomatoes", "ginger-garlic", "red chili powder", "garam masala", "kasoori methi"],
    steps: [
      "Soak dal and rajma overnight. Pressure cook until very soft.",
      "Cook onion-tomato masala with butter until rich and thick.",
      "Add cooked dal, mash slightly and simmer on low heat 1 hour.",
      "Add butter and cream. Simmer more.",
      "Finish with kasoori methi and serve with butter naan."
    ],
    tags: ["slow-cooked", "restaurant-style", "rich"], rating: 4.9, reviews: []
  },
  {
    id: 22, name: "Shahi Paneer", category: "dinner", type: "veg",
    region: "Mughal", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    description: "Royal paneer dish in a luxurious cream-cashew-almond gravy with saffron.",
    ingredients: ["300g paneer", "cashews", "almonds", "cream", "onion", "ginger-garlic", "saffron", "cardamom", "rose water", "ghee"],
    steps: [
      "Soak cashews and almonds, blend smooth.",
      "Cook onion paste in ghee until golden.",
      "Add ginger-garlic, nut paste, and cook.",
      "Add cream, saffron water, cardamom.",
      "Add paneer cubes, simmer 10 minutes. Finish with rose water."
    ],
    tags: ["mughal", "royal", "creamy"], rating: 4.8, reviews: []
  },
  {
    id: 23, name: "Malai Kofta", category: "dinner", type: "veg",
    region: "North India", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=80",
    description: "Paneer and potato dumplings in a rich, creamy tomato gravy.",
    ingredients: ["paneer", "potatoes", "onion", "tomatoes", "cashews", "cream", "garam masala", "cardamom", "oil"],
    steps: [
      "Make koftas with mashed paneer, potato, and spices. Deep fry.",
      "Blend onion, tomato, cashew into smooth paste.",
      "Cook paste in oil until oil separates.",
      "Add cream and spices. Simmer gravy.",
      "Add koftas just before serving to prevent them from becoming soggy."
    ],
    tags: ["indulgent", "restaurant-style", "party"], rating: 4.7, reviews: []
  },
  {
    id: 24, name: "Aloo Gobi", category: "dinner", type: "veg",
    region: "North India", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Potatoes and cauliflower cooked with cumin and turmeric — a humble everyday dish.",
    ingredients: ["2 potatoes", "1 cauliflower", "onion", "tomatoes", "cumin", "turmeric", "coriander powder", "garam masala", "oil", "coriander"],
    steps: [
      "Cut vegetables into equal-sized pieces.",
      "Heat oil, add cumin and let it splutter.",
      "Add onion and cook until golden.",
      "Add tomatoes and spices. Cook 5 minutes.",
      "Add vegetables, cover and cook 20 minutes on low. Garnish and serve."
    ],
    tags: ["simple", "everyday", "vegan"], rating: 4.5, reviews: []
  },
  {
    id: 25, name: "Pav Bhaji", category: "dinner", type: "veg",
    region: "Mumbai", time: 40, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Street-style spiced mashed vegetables served with buttered toasted bread rolls.",
    ingredients: ["potatoes", "cauliflower", "peas", "tomatoes", "capsicum", "onion", "pav bhaji masala", "butter", "pav bread", "lemon"],
    steps: [
      "Cook and mash all vegetables together.",
      "Sauté onion-tomato masala with butter and pav bhaji masala.",
      "Add mashed vegetables, cook pressing with spatula.",
      "Add butter generously, let it sizzle.",
      "Toast pav with butter. Serve bhaji with pav, onion, and lemon."
    ],
    tags: ["mumbai", "street-food", "crowd-pleaser"], rating: 4.8, reviews: []
  },

  // === BREAKFAST - NON-VEG ===
  {
    id: 26, name: "Egg Paratha", category: "breakfast", type: "non-veg",
    region: "North India", time: 20, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&q=80",
    description: "Whole wheat flatbread stuffed with spiced scrambled eggs — a hearty morning meal.",
    ingredients: ["2 cups wheat flour", "3 eggs", "onion", "green chilies", "coriander", "cumin", "turmeric", "oil", "salt"],
    steps: [
      "Make soft wheat dough, rest 20 minutes.",
      "Beat eggs with chopped onion, chilies, coriander, and spices.",
      "Roll out dough, pour egg mixture on one side.",
      "Fold over and press to seal. Cook on griddle.",
      "Drizzle oil and cook until golden. Serve with ketchup or chutney."
    ],
    tags: ["protein", "filling", "quick"], rating: 4.6, reviews: []
  },
  {
    id: 27, name: "Keema Paratha", category: "breakfast", type: "non-veg",
    region: "Hyderabad", time: 40, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    description: "Flatbread stuffed with spiced minced meat — a Hyderabadi breakfast treasure.",
    ingredients: ["2 cups wheat flour", "250g minced mutton", "onion", "ginger-garlic", "green chilies", "mint", "garam masala", "egg", "oil"],
    steps: [
      "Cook minced meat with spices, onion, ginger-garlic until dry.",
      "Make soft dough and rest.",
      "Flatten dough, stuff with keema filling.",
      "Roll carefully and cook on griddle with oil.",
      "Cook until both sides are golden brown. Serve with raita."
    ],
    tags: ["hyderabadi", "protein-rich", "hearty"], rating: 4.7, reviews: []
  },
  {
    id: 28, name: "Anda Bhurji", category: "breakfast", type: "non-veg",
    region: "Mumbai", time: 15, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    description: "Mumbai-style spicy scrambled eggs with onions, tomatoes, and street-side masala.",
    ingredients: ["4 eggs", "onion", "tomatoes", "green chilies", "ginger", "cumin", "turmeric", "red chili powder", "coriander", "butter"],
    steps: [
      "Heat butter, add cumin and let splutter.",
      "Add onion and cook until translucent.",
      "Add ginger, chilies, tomatoes and spices. Cook until tomatoes break down.",
      "Add beaten eggs and stir continuously on medium heat.",
      "Cook until fluffy. Garnish with coriander and serve with pav."
    ],
    tags: ["mumbai", "street-style", "quick"], rating: 4.8, reviews: []
  },

  // === LUNCH - NON-VEG ===
  {
    id: 29, name: "Chicken Biryani", category: "lunch", type: "non-veg",
    region: "Hyderabad", time: 90, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    description: "Aromatic basmati rice slow-cooked with marinated chicken on dum — the king of biryanis.",
    ingredients: ["1kg chicken", "3 cups basmati rice", "yogurt", "biryani masala", "saffron", "fried onions", "ghee", "mint", "whole spices", "rose water"],
    steps: [
      "Marinate chicken with yogurt, spices, and fried onions for 2 hours.",
      "Parboil rice with whole spices to 70%.",
      "Cook marinated chicken in heavy pot until half done.",
      "Layer rice over chicken, add saffron milk, mint, ghee.",
      "Seal and cook on dum (low heat) 30 minutes. Mix gently and serve."
    ],
    tags: ["hyderabadi", "dum", "legendary"], rating: 5.0, reviews: []
  },
  {
    id: 30, name: "Butter Chicken", category: "lunch", type: "non-veg",
    region: "Delhi", time: 60, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "Tender chicken in a velvety, mildly spiced tomato-butter gravy — globally beloved.",
    ingredients: ["700g chicken", "yogurt", "tomatoes", "butter", "cream", "cashews", "ginger-garlic", "kashmiri chili", "garam masala", "kasoori methi"],
    steps: [
      "Marinate chicken with yogurt and spices. Grill or bake.",
      "Cook onion-tomato-cashew paste in butter.",
      "Add spices and cook until rich.",
      "Add grilled chicken pieces and cream.",
      "Simmer 15 minutes, finish with kasoori methi and butter."
    ],
    tags: ["globally-loved", "creamy", "mild"], rating: 4.9, reviews: []
  },
  {
    id: 31, name: "Mutton Rogan Josh", category: "lunch", type: "non-veg",
    region: "Kashmir", time: 90, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Kashmiri-style slow-cooked mutton in a deep red sauce of whole spices and yogurt.",
    ingredients: ["1kg mutton", "yogurt", "kashmiri red chilies", "fennel powder", "ginger powder", "cardamom", "cloves", "mustard oil", "asafoetida"],
    steps: [
      "Heat mustard oil, add whole spices and asafoetida.",
      "Add mutton and sear on high heat.",
      "Add kashmiri chili paste and cook until oil separates.",
      "Add yogurt, fennel, and ginger powder.",
      "Cook covered on low heat 60 minutes until mutton is tender."
    ],
    tags: ["kashmiri", "slow-cooked", "aromatic"], rating: 4.9, reviews: []
  },
  {
    id: 32, name: "Fish Curry", category: "lunch", type: "non-veg",
    region: "Kerala", time: 35, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Tangy, coconut-based fish curry with raw mango and kokum — a Kerala coastal classic.",
    ingredients: ["500g fish", "coconut milk", "raw mango", "green chilies", "ginger", "turmeric", "chili powder", "mustard seeds", "curry leaves", "coconut oil"],
    steps: [
      "Marinate fish with turmeric and salt.",
      "Cook coconut milk with spices, mango, and green chilies.",
      "Add fish pieces gently and cook 15 minutes.",
      "Temper with coconut oil, mustard seeds, and curry leaves.",
      "Serve with steamed rice."
    ],
    tags: ["kerala", "coastal", "tangy"], rating: 4.7, reviews: []
  },
  {
    id: 33, name: "Chicken Tikka Masala", category: "lunch", type: "non-veg",
    region: "Punjab", time: 60, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "Chargrilled chicken tikka cooked in a spiced, tangy masala sauce.",
    ingredients: ["700g chicken", "yogurt", "tikka masala", "onion", "tomatoes", "cream", "ginger-garlic", "capsicum", "lemon", "oil"],
    steps: [
      "Marinate chicken in yogurt and tikka spices. Skewer and grill.",
      "Cook onion-tomato masala with spices until thick.",
      "Add grilled chicken pieces and cream.",
      "Simmer 10 minutes.",
      "Garnish with cream swirl and serve with naan."
    ],
    tags: ["popular", "grilled", "smoky"], rating: 4.8, reviews: []
  },
  {
    id: 34, name: "Prawn Masala", category: "lunch", type: "non-veg",
    region: "Goa", time: 30, servings: 3, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Juicy prawns in a fiery Goan spiced tomato and coconut masala.",
    ingredients: ["500g prawns", "coconut", "onion", "tomatoes", "ginger-garlic", "Goan spice paste", "tamarind", "oil", "coriander"],
    steps: [
      "Clean and devein prawns.",
      "Make Goan masala by blending coconut, spices, tamarind.",
      "Cook onion-tomato base with ginger-garlic.",
      "Add masala paste and cook until oil separates.",
      "Add prawns and cook just 5-7 minutes. Serve with rice or bread."
    ],
    tags: ["goan", "coastal", "spicy"], rating: 4.7, reviews: []
  },
  {
    id: 35, name: "Mutton Kheema", category: "lunch", type: "non-veg",
    region: "Hyderabad", time: 40, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Spiced minced mutton cooked with peas, tomatoes, and Hyderabadi flavors.",
    ingredients: ["500g mutton mince", "1 cup peas", "onion", "tomatoes", "ginger-garlic", "cumin", "garam masala", "coriander", "mint", "oil"],
    steps: [
      "Sauté onions until golden.",
      "Add ginger-garlic, cook until raw smell leaves.",
      "Add mutton mince, break lumps and cook until browned.",
      "Add tomatoes, peas, and spices. Cover and cook 25 minutes.",
      "Garnish with mint and coriander. Serve with roti."
    ],
    tags: ["hyderabadi", "everyday", "quick"], rating: 4.6, reviews: []
  },

  // === DINNER - NON-VEG ===
  {
    id: 36, name: "Chicken Curry", category: "dinner", type: "non-veg",
    region: "Pan India", time: 45, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "Classic Indian chicken curry with onions, tomatoes, and a blend of warm spices.",
    ingredients: ["1kg chicken", "onion", "tomatoes", "ginger-garlic", "cumin", "coriander", "garam masala", "red chili", "turmeric", "oil"],
    steps: [
      "Brown onions in oil until deep golden.",
      "Add ginger-garlic paste and cook.",
      "Add tomatoes and all dry spices. Cook until masala is thick.",
      "Add chicken pieces, coat with masala and sear.",
      "Add water, cover and cook 25 minutes. Garnish with coriander."
    ],
    tags: ["classic", "everyday", "comfort"], rating: 4.6, reviews: []
  },
  {
    id: 37, name: "Tandoori Chicken", category: "dinner", type: "non-veg",
    region: "Punjab", time: 60, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Yogurt-marinated chicken roasted to charred perfection with Punjabi spices.",
    ingredients: ["1kg chicken", "yogurt", "tandoori masala", "lemon", "red food color (optional)", "ginger-garlic", "kashmiri chili", "oil", "salt"],
    steps: [
      "Make deep cuts in chicken. Mix yogurt, spices, lemon for marinade.",
      "Coat chicken thoroughly, marinate minimum 4 hours or overnight.",
      "Place on grill or oven at highest temperature.",
      "Cook 25-30 minutes, turning halfway, until charred.",
      "Serve with mint chutney, onion rings, and lemon."
    ],
    tags: ["grilled", "legendary", "party"], rating: 4.9, reviews: []
  },
  {
    id: 38, name: "Goan Fish Vindaloo", category: "dinner", type: "non-veg",
    region: "Goa", time: 50, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Fiery Goan vinegar-based fish curry with potatoes — bold, tangy, and unforgettable.",
    ingredients: ["600g fish", "potatoes", "vinegar", "garlic", "dried red chilies", "cumin", "cardamom", "mustard seeds", "onion", "oil"],
    steps: [
      "Grind dried chilies, garlic, cumin, and vinegar to a paste.",
      "Marinate fish in vindaloo paste.",
      "Fry onions and potatoes until golden.",
      "Add fish and marinade, cook on medium.",
      "Simmer until gravy thickens and fish is cooked. Serve with rice."
    ],
    tags: ["goan", "fiery", "portuguese-influence"], rating: 4.7, reviews: []
  },
  {
    id: 39, name: "Seekh Kebab", category: "dinner", type: "non-veg",
    region: "Lucknow", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Silky minced mutton skewers with Awadhi spices, grilled to smoky perfection.",
    ingredients: ["500g minced mutton", "onion", "green chilies", "ginger-garlic", "garam masala", "coriander", "mint", "egg", "oil"],
    steps: [
      "Mix minced mutton with all spices, herbs, and egg. Chill 1 hour.",
      "Shape around skewers in log shapes.",
      "Grill or cook in oven on high heat.",
      "Rotate for even cooking until golden brown.",
      "Serve with mint chutney, onion, and lemon."
    ],
    tags: ["awadhi", "grilled", "appetizer"], rating: 4.8, reviews: []
  },
  {
    id: 40, name: "Dum Gosht", category: "dinner", type: "non-veg",
    region: "Hyderabad", time: 120, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Mutton slow-cooked in a sealed pot with yogurt and aromatic whole spices.",
    ingredients: ["1.5kg mutton", "yogurt", "fried onions", "whole spices", "ginger-garlic", "saffron", "rose water", "ghee", "mint"],
    steps: [
      "Marinate mutton with yogurt, fried onions, spices overnight.",
      "Place in heavy-bottomed vessel with ghee.",
      "Cook on high briefly, then seal with dough.",
      "Cook on low flame (dum) for 90 minutes.",
      "Break seal at table. Serve with naan."
    ],
    tags: ["slow-cooked", "royal", "dum"], rating: 4.9, reviews: []
  },

  // === MORE VEG RECIPES ===
  {
    id: 41, name: "Chana Masala", category: "lunch", type: "veg",
    region: "North India", time: 45, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
    description: "Hearty chickpea curry with tangy amchur and aromatic spice blend.",
    ingredients: ["2 cups chickpeas", "onion", "tomatoes", "ginger-garlic", "chana masala powder", "amchur", "cumin", "oil", "coriander"],
    steps: [
      "Soak chickpeas overnight and pressure cook.",
      "Brown onions, add ginger-garlic and tomatoes.",
      "Add chana masala and all spices.",
      "Add chickpeas with some cooking water.",
      "Simmer 15 minutes, finish with amchur. Garnish and serve."
    ],
    tags: ["protein", "tangy", "popular"], rating: 4.8, reviews: []
  },
  {
    id: 42, name: "Bhindi Masala", category: "lunch", type: "veg",
    region: "North India", time: 25, servings: 3, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    description: "Crispy okra cooked with onion, tomatoes, and tangy spices.",
    ingredients: ["500g okra", "onion", "tomatoes", "cumin", "coriander powder", "amchur", "turmeric", "oil"],
    steps: [
      "Wash and dry okra thoroughly. Cut into pieces.",
      "Fry okra in oil until crispy. Set aside.",
      "In same pan, sauté onions until golden.",
      "Add tomatoes and spices. Cook until thick.",
      "Add fried okra, toss gently. Cook 5 minutes and serve."
    ],
    tags: ["crispy", "everyday", "quick"], rating: 4.5, reviews: []
  },
  {
    id: 43, name: "Aloo Matar Curry", category: "lunch", type: "veg",
    region: "North India", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Simple potato and pea curry in a light tomato-onion base.",
    ingredients: ["3 potatoes", "1 cup peas", "onion", "tomatoes", "cumin", "turmeric", "coriander powder", "garam masala", "oil"],
    steps: [
      "Cube potatoes and parboil.",
      "Heat oil, add cumin seeds.",
      "Sauté onions until soft, add tomatoes and spices.",
      "Add potatoes and peas. Add water for gravy.",
      "Cover and cook 15 minutes. Garnish with coriander."
    ],
    tags: ["simple", "kids-friendly", "everyday"], rating: 4.4, reviews: []
  },
  {
    id: 44, name: "Lauki Kofta", category: "dinner", type: "veg",
    region: "North India", time: 50, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
    description: "Bottle gourd dumplings in a tomato-onion curry sauce.",
    ingredients: ["1 bottle gourd", "chickpea flour", "onion", "tomatoes", "cream", "garam masala", "coriander", "oil"],
    steps: [
      "Grate bottle gourd, squeeze water. Mix with chickpea flour and spices.",
      "Shape into balls and deep fry until golden.",
      "Cook tomato-onion gravy with spices.",
      "Add cream and simmer.",
      "Add koftas just before serving."
    ],
    tags: ["light", "creative", "weekend"], rating: 4.5, reviews: []
  },
  {
    id: 45, name: "Dum Aloo", category: "dinner", type: "veg",
    region: "Kashmir", time: 45, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Baby potatoes slow-cooked in a Kashmiri fennel-yogurt gravy.",
    ingredients: ["500g baby potatoes", "yogurt", "kashmiri red chilies", "fennel powder", "ginger powder", "mustard oil", "asafoetida", "cardamom"],
    steps: [
      "Prick and fry baby potatoes until golden. Set aside.",
      "Heat mustard oil, add asafoetida and whole spices.",
      "Add kashmiri chili paste, cook until oil separates.",
      "Whisk yogurt with fennel and ginger powder, add to pan.",
      "Add potatoes, simmer on low until gravy coats them."
    ],
    tags: ["kashmiri", "unique", "baby-potatoes"], rating: 4.7, reviews: []
  },
  {
    id: 46, name: "Vegetable Korma", category: "dinner", type: "veg",
    region: "Mughal", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    description: "Mixed vegetables in a mild, creamy nut-yogurt gravy with whole spices.",
    ingredients: ["mixed vegetables", "cashews", "yogurt", "onion", "cream", "whole spices", "saffron", "ginger-garlic", "ghee"],
    steps: [
      "Blend cashews and onion into paste.",
      "Cook paste in ghee until golden.",
      "Add ginger-garlic and cook.",
      "Add yogurt and spices. Simmer.",
      "Add vegetables and cream. Cook until tender."
    ],
    tags: ["mughal", "mild", "creamy"], rating: 4.6, reviews: []
  },
  {
    id: 47, name: "Tadka Dal with Rice", category: "dinner", type: "veg",
    region: "Pan India", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
    description: "Simple comforting yellow dal with rice — the soul of Indian home cooking.",
    ingredients: ["1 cup masoor dal", "rice", "tomatoes", "onion", "cumin", "mustard seeds", "ghee", "red chilies", "turmeric"],
    steps: [
      "Cook rice and set aside.",
      "Boil dal with turmeric until soft.",
      "Sauté onion, tomatoes with spices.",
      "Combine with dal and simmer.",
      "Prepare tadka with ghee, cumin, red chilies. Pour over dal."
    ],
    tags: ["everyday", "comfort", "easy"], rating: 4.6, reviews: []
  },
  {
    id: 48, name: "Paneer Bhurji", category: "breakfast", type: "veg",
    region: "North India", time: 20, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    description: "Crumbled cottage cheese scramble with onions, tomatoes, and spices.",
    ingredients: ["250g paneer", "onion", "tomatoes", "green chilies", "ginger", "cumin", "turmeric", "garam masala", "butter", "coriander"],
    steps: [
      "Crumble paneer and set aside.",
      "Heat butter, add cumin and onions. Cook until golden.",
      "Add ginger, chilies, tomatoes and spices.",
      "Add crumbled paneer and toss gently.",
      "Garnish with coriander. Serve with toast or paratha."
    ],
    tags: ["protein", "quick", "vegetarian"], rating: 4.6, reviews: []
  },
  {
    id: 49, name: "Masala Chai", category: "breakfast", type: "veg",
    region: "Pan India", time: 10, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    description: "Aromatic spiced milk tea with ginger, cardamom, and cinnamon — the heart of India.",
    ingredients: ["2 cups water", "1 cup milk", "2 tsp tea leaves", "cardamom", "ginger", "cinnamon", "cloves", "sugar"],
    steps: [
      "Crush cardamom, grate ginger.",
      "Boil water with spices for 2 minutes.",
      "Add tea leaves and simmer 1 minute.",
      "Add milk, sugar and bring to boil.",
      "Strain and serve hot."
    ],
    tags: ["beverage", "warming", "everyday"], rating: 4.9, reviews: []
  },
  {
    id: 50, name: "Suji Halwa", category: "breakfast", type: "veg",
    region: "North India", time: 20, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Semolina pudding with cardamom, ghee, and dry fruits — a sacred sweet offering.",
    ingredients: ["1 cup semolina", "1 cup sugar", "1 cup water", "ghee", "cardamom", "raisins", "cashews", "saffron"],
    steps: [
      "Heat ghee and roast semolina until golden and fragrant.",
      "Add nuts and raisins. Roast briefly.",
      "Add hot water carefully — it will splutter.",
      "Add sugar and stir continuously.",
      "Cook until thick, add cardamom and saffron. Serve warm."
    ],
    tags: ["sweet", "prasad", "quick"], rating: 4.7, reviews: []
  },

  // More recipes to reach 100...
  {
    id: 51, name: "Khichdi", category: "dinner", type: "veg",
    region: "Pan India", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
    description: "Comforting one-pot dish of rice and lentils with ghee and mild spices.",
    ingredients: ["1 cup rice", "1/2 cup moong dal", "ghee", "cumin", "turmeric", "ginger", "salt", "water"],
    steps: [
      "Wash rice and dal together.",
      "Heat ghee, add cumin and ginger.",
      "Add rice-dal mixture and toast 2 minutes.",
      "Add water (4 cups), turmeric, salt.",
      "Cook until mushy. Top with more ghee and serve."
    ],
    tags: ["healing", "easy", "comfort"], rating: 4.7, reviews: []
  },
  {
    id: 52, name: "Dahi Vada", category: "breakfast", type: "veg",
    region: "North India", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    description: "Soft lentil fritters soaked in chilled yogurt with tamarind chutney and spices.",
    ingredients: ["1 cup urad dal", "yogurt", "tamarind chutney", "mint chutney", "cumin powder", "red chili", "chaat masala", "coriander"],
    steps: [
      "Soak and grind urad dal to fluffy batter.",
      "Deep fry in round shapes until golden.",
      "Soak in warm water 10 minutes, squeeze gently.",
      "Place in whisked chilled yogurt.",
      "Top with both chutneys, cumin powder, chaat masala and coriander."
    ],
    tags: ["chaat", "festival", "cooling"], rating: 4.8, reviews: []
  },
  {
    id: 53, name: "Vada Pav", category: "breakfast", type: "veg",
    region: "Mumbai", time: 30, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Mumbai's beloved street snack — spiced potato fritter in a soft bun with chutneys.",
    ingredients: ["potatoes", "chickpea flour", "pav bread", "green chutney", "garlic chutney", "mustard seeds", "curry leaves", "turmeric", "oil"],
    steps: [
      "Mash potatoes with tempering of mustard seeds, curry leaves.",
      "Make chickpea flour batter.",
      "Shape potato mixture into balls, dip in batter and deep fry.",
      "Toast pav buns on griddle.",
      "Spread chutneys in pav, place hot vada and serve immediately."
    ],
    tags: ["mumbai", "street-food", "iconic"], rating: 4.9, reviews: []
  },
  {
    id: 54, name: "Thalipeeth", category: "breakfast", type: "veg",
    region: "Maharashtra", time: 30, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Multi-grain spiced Maharashtrian flatbread with onion and herbs.",
    ingredients: ["bhajani flour (multi-grain)", "onion", "green chilies", "coriander", "sesame seeds", "cumin", "oil", "yogurt"],
    steps: [
      "Mix bhajani flour with spices, onion, coriander.",
      "Add water gradually to make soft dough.",
      "Pat on oiled banana leaf or plastic.",
      "Make hole in center and cook on greased griddle.",
      "Cook with oil until crispy. Serve with yogurt and pickle."
    ],
    tags: ["maharashtrian", "multi-grain", "wholesome"], rating: 4.5, reviews: []
  },
  {
    id: 55, name: "Stuffed Capsicum", category: "dinner", type: "veg",
    region: "Pan India", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    description: "Bell peppers stuffed with spiced rice and paneer mixture, baked to perfection.",
    ingredients: ["4 capsicums", "cooked rice", "paneer", "onion", "tomatoes", "peas", "spices", "cheese", "oil"],
    steps: [
      "Cut tops off capsicums and hollow out.",
      "Make filling with rice, paneer, vegetables, and spices.",
      "Stuff capsicums with filling.",
      "Brush with oil, place in baking dish.",
      "Bake at 180°C for 25 minutes. Top with cheese last 5 minutes."
    ],
    tags: ["baked", "creative", "colorful"], rating: 4.5, reviews: []
  },
  {
    id: 56, name: "Mushroom Masala", category: "dinner", type: "veg",
    region: "North India", time: 30, servings: 3, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80",
    description: "Earthy mushrooms in a rich spiced tomato-onion gravy.",
    ingredients: ["400g mushrooms", "onion", "tomatoes", "ginger-garlic", "cream", "garam masala", "cumin", "turmeric", "oil", "coriander"],
    steps: [
      "Sauté mushrooms until golden. Set aside.",
      "Cook onion-tomato masala with spices.",
      "Add cream and simmer gravy.",
      "Add mushrooms and cook 5 minutes.",
      "Garnish with coriander and serve."
    ],
    tags: ["earthy", "quick", "vegetarian"], rating: 4.6, reviews: []
  },
  {
    id: 57, name: "Moong Dal Cheela", category: "breakfast", type: "veg",
    region: "Rajasthan", time: 25, servings: 3, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Protein-packed yellow moong dal pancakes — a Rajasthani breakfast staple.",
    ingredients: ["1 cup yellow moong dal", "ginger", "green chilies", "cumin", "turmeric", "onion", "coriander", "oil"],
    steps: [
      "Soak dal 2 hours, grind to smooth batter.",
      "Add spices, ginger, chilies to batter.",
      "Heat griddle, pour batter in thin circles.",
      "Add chopped onion on top.",
      "Cook with oil until golden and crispy on both sides."
    ],
    tags: ["protein", "healthy", "rajasthani"], rating: 4.5, reviews: []
  },
  {
    id: 58, name: "Kachori Sabzi", category: "breakfast", type: "veg",
    region: "Rajasthan", time: 50, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Flaky deep-fried pastry stuffed with spiced lentils, served with potato curry.",
    ingredients: ["flour", "urad dal", "potato curry", "fennel seeds", "coriander", "red chili", "asafoetida", "oil"],
    steps: [
      "Make stiff dough for kachori shells.",
      "Cook urad dal with spices until dry.",
      "Stuff dal filling in dough balls and seal.",
      "Deep fry on low heat until flaky and golden.",
      "Serve with potato curry and tamarind chutney."
    ],
    tags: ["rajasthani", "indulgent", "street-food"], rating: 4.7, reviews: []
  },
  {
    id: 59, name: "Bisi Bele Bath", category: "lunch", type: "veg",
    region: "Karnataka", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    description: "Karnataka's one-pot rice-lentil-vegetable dish with tamarind and special spice powder.",
    ingredients: ["rice", "toor dal", "vegetables", "tamarind", "bisi bele bath powder", "ghee", "mustard seeds", "curry leaves", "peanuts", "cashews"],
    steps: [
      "Cook rice and dal together until very soft.",
      "Cook vegetables with tamarind extract.",
      "Add bisi bele bath powder and mix everything.",
      "Add more water if needed, cook to porridge consistency.",
      "Temper with ghee, mustard seeds, curry leaves, nuts. Serve hot."
    ],
    tags: ["karnataka", "one-pot", "hearty"], rating: 4.7, reviews: []
  },
  {
    id: 60, name: "Puran Poli", category: "breakfast", type: "veg",
    region: "Maharashtra", time: 60, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Sweet flatbread stuffed with jaggery-lentil filling — a Maharashtrian festival treat.",
    ingredients: ["1 cup chana dal", "1 cup jaggery", "cardamom", "nutmeg", "2 cups flour", "ghee", "turmeric"],
    steps: [
      "Cook chana dal until soft. Drain well.",
      "Cook dal with jaggery until thick. Add cardamom.",
      "Make soft dough with flour and rest.",
      "Stuff dal filling in dough, roll gently.",
      "Cook on griddle with generous ghee until golden."
    ],
    tags: ["festival", "sweet", "maharashtrian"], rating: 4.8, reviews: []
  },

  // 61-80 more recipes
  {
    id: 61, name: "Samosa", category: "breakfast", type: "veg",
    region: "North India", time: 60, servings: 8, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    description: "Crispy pastry triangles filled with spiced potatoes and peas — India's favorite snack.",
    ingredients: ["flour", "potatoes", "peas", "cumin", "coriander", "garam masala", "ginger", "green chilies", "oil"],
    steps: [
      "Make stiff dough with flour and oil. Rest 30 minutes.",
      "Cook potato-pea filling with spices until dry.",
      "Roll dough thin, cut circles, shape into cones.",
      "Fill with potato mixture, seal edges.",
      "Deep fry on medium heat until golden and crispy."
    ],
    tags: ["iconic", "street-food", "crispy"], rating: 4.9, reviews: []
  },
  {
    id: 62, name: "Haleem", category: "dinner", type: "non-veg",
    region: "Hyderabad", time: 180, servings: 8, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Slow-cooked wheat and meat porridge — Hyderabad's prized Ramzan delicacy.",
    ingredients: ["mutton", "wheat", "chana dal", "spices", "fried onions", "ghee", "ginger-garlic", "yogurt", "mint", "lemon"],
    steps: [
      "Soak wheat and dal separately overnight.",
      "Cook mutton with spices until very tender.",
      "Cook wheat and dal to soft.",
      "Combine all and blend partially into thick porridge.",
      "Cook further with ghee. Serve with fried onions, mint, lemon."
    ],
    tags: ["slow-cooked", "hyderabadi", "ramzan"], rating: 4.9, reviews: []
  },
  {
    id: 63, name: "Naan", category: "dinner", type: "veg",
    region: "North India", time: 90, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    description: "Fluffy leavened bread cooked on a hot griddle with butter and garlic.",
    ingredients: ["flour", "yeast", "yogurt", "egg", "butter", "garlic", "milk", "sugar", "salt"],
    steps: [
      "Mix flour with yeast, yogurt, egg, milk. Knead 10 minutes.",
      "Rest 1 hour until doubled.",
      "Divide and roll into teardrop shapes.",
      "Cook on very hot griddle or cast iron until charred.",
      "Brush with garlic butter immediately."
    ],
    tags: ["bread", "restaurant-style", "soft"], rating: 4.8, reviews: []
  },
  {
    id: 64, name: "Gajar Halwa", category: "dinner", type: "veg",
    region: "North India", time: 60, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Slow-cooked carrot pudding with milk, sugar, and dry fruits — winter comfort dessert.",
    ingredients: ["1kg carrots", "1 liter milk", "sugar", "ghee", "cardamom", "cashews", "raisins", "khoya"],
    steps: [
      "Grate carrots finely.",
      "Cook grated carrots in milk on low heat until milk absorbs.",
      "Add sugar and cook further.",
      "Add ghee and stir until it leaves sides.",
      "Add khoya, cardamom, nuts. Cook 5 more minutes."
    ],
    tags: ["dessert", "winter", "sweet"], rating: 4.8, reviews: []
  },
  {
    id: 65, name: "Pongal", category: "breakfast", type: "veg",
    region: "Tamil Nadu", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&q=80",
    description: "Creamy rice and moong dal porridge with pepper, ginger, and ghee tempering.",
    ingredients: ["1 cup rice", "1/2 cup moong dal", "ghee", "black pepper", "ginger", "cumin", "curry leaves", "cashews"],
    steps: [
      "Pressure cook rice and dal until very soft.",
      "Mash slightly with back of spoon.",
      "Heat ghee, fry cashews, add pepper, cumin, curry leaves, ginger.",
      "Pour tempering over rice-dal mixture.",
      "Mix well and serve with coconut chutney and sambar."
    ],
    tags: ["south-indian", "creamy", "comfort"], rating: 4.7, reviews: []
  },
  {
    id: 66, name: "Murgh Mussallam", category: "dinner", type: "non-veg",
    region: "Lucknow", time: 90, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Whole chicken marinated and slow-cooked in a rich Awadhi spice gravy.",
    ingredients: ["whole chicken", "yogurt", "cashews", "fried onions", "whole spices", "saffron", "ghee", "ginger-garlic", "aromatic spices"],
    steps: [
      "Make incisions in whole chicken and marinate 6 hours.",
      "Prepare rich gravy with onion paste, cashews, spices.",
      "Sear chicken on all sides in ghee.",
      "Cook chicken in gravy on low heat 45 minutes.",
      "Finish with saffron and serve whole."
    ],
    tags: ["awadhi", "royal", "show-stopper"], rating: 4.9, reviews: []
  },
  {
    id: 67, name: "Appam with Stew", category: "dinner", type: "non-veg",
    region: "Kerala", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&q=80",
    description: "Lacy rice hoppers served with coconut milk chicken stew — Kerala Sunday special.",
    ingredients: ["rice", "coconut milk", "yeast", "chicken", "potatoes", "coconut milk", "whole spices", "green chilies", "ginger"],
    steps: [
      "Soak rice, grind with coconut milk and yeast. Ferment overnight.",
      "Cook appam in special pan: lacy edges, soft center.",
      "Cook chicken with vegetables in thin coconut milk.",
      "Add thick coconut milk at end.",
      "Serve appam with warm stew."
    ],
    tags: ["kerala", "coconut", "sunday-special"], rating: 4.8, reviews: []
  },
  {
    id: 68, name: "Dhokla", category: "breakfast", type: "veg",
    region: "Gujarat", time: 45, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    description: "Spongy steamed fermented chickpea flour cakes with sweet-spicy tempering.",
    ingredients: ["chickpea flour", "yogurt", "eno", "sugar", "green chilies", "mustard seeds", "sesame seeds", "curry leaves", "coriander"],
    steps: [
      "Mix chickpea flour with yogurt, spices into smooth batter.",
      "Add eno fruit salt right before steaming.",
      "Pour into greased plate and steam 15 minutes.",
      "Check with toothpick. Cool slightly.",
      "Temper with oil, mustard seeds, green chilies, curry leaves. Pour over, cut and serve."
    ],
    tags: ["gujarati", "steamed", "spongy"], rating: 4.7, reviews: []
  },
  {
    id: 69, name: "Gatte ki Sabzi", category: "lunch", type: "veg",
    region: "Rajasthan", time: 50, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    description: "Chickpea flour dumplings in tangy yogurt curry — a Rajasthani specialty.",
    ingredients: ["chickpea flour", "yogurt", "cumin", "coriander", "garam masala", "oil", "mustard seeds", "asafoetida", "red chilies"],
    steps: [
      "Mix chickpea flour with spices and oil. Knead to stiff dough.",
      "Shape into logs and boil until firm.",
      "Cool and slice into pieces.",
      "Make yogurt curry with tempering and spices.",
      "Add gatte pieces and simmer 10 minutes."
    ],
    tags: ["rajasthani", "yogurt-based", "unique"], rating: 4.5, reviews: []
  },
  {
    id: 70, name: "Bihari Litti Chokha", category: "dinner", type: "veg",
    region: "Bihar", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Roasted wheat balls stuffed with sattu, served with smoked eggplant-tomato chokha.",
    ingredients: ["wheat flour", "sattu", "mustard oil", "garlic", "ginger", "eggplant", "tomatoes", "oil"],
    steps: [
      "Make stuffing with sattu, spices, mustard oil.",
      "Make wheat dough, stuff with sattu filling.",
      "Bake in oven or on coals until charred.",
      "Roast eggplant and tomatoes. Mash with spices for chokha.",
      "Dip hot littis in ghee and serve with chokha."
    ],
    tags: ["bihari", "rustic", "unique"], rating: 4.6, reviews: []
  },
  {
    id: 71, name: "Curd Rice", category: "lunch", type: "veg",
    region: "South India", time: 15, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    description: "Cooling South Indian comfort of rice mixed with yogurt and tempered with spices.",
    ingredients: ["cooked rice", "yogurt", "milk", "mustard seeds", "curry leaves", "green chilies", "ginger", "pomegranate", "oil"],
    steps: [
      "Cool cooked rice slightly.",
      "Mix with yogurt and milk for creamy texture.",
      "Temper mustard seeds, curry leaves, chilies, ginger.",
      "Pour tempering over rice.",
      "Garnish with pomegranate and serve chilled."
    ],
    tags: ["cooling", "south-indian", "summer"], rating: 4.6, reviews: []
  },
  {
    id: 72, name: "Nihari", category: "dinner", type: "non-veg",
    region: "Delhi/Lucknow", time: 300, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Slow-cooked mutton stew traditionally simmered overnight with bone marrow and spices.",
    ingredients: ["1kg mutton with bone", "whole spices", "nihari masala", "wheat flour", "ghee", "ginger-garlic", "fried onions", "lemon"],
    steps: [
      "Sear mutton in ghee. Add ginger-garlic.",
      "Add nihari masala and whole spices.",
      "Add water and cook very slowly for 4-5 hours.",
      "Thicken with wheat flour paste.",
      "Garnish with fried onions, ginger, lemon, coriander."
    ],
    tags: ["slow-cooked", "mughal", "bone-marrow"], rating: 5.0, reviews: []
  },
  {
    id: 73, name: "Shorba", category: "dinner", type: "non-veg",
    region: "Hyderabad", time: 45, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Fragrant Hyderabadi chicken broth with whole spices and fresh herbs.",
    ingredients: ["chicken", "whole spices", "onion", "ginger-garlic", "tomatoes", "mint", "coriander", "lemon"],
    steps: [
      "Brown onions in oil.",
      "Add chicken and whole spices. Cook until chicken is sealed.",
      "Add tomatoes and ginger-garlic.",
      "Add water and simmer 30 minutes.",
      "Strain, add lemon and herbs. Serve hot."
    ],
    tags: ["soup", "warming", "hyderabadi"], rating: 4.5, reviews: []
  },
  {
    id: 74, name: "Batata Vada", category: "breakfast", type: "veg",
    region: "Maharashtra", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Spiced potato balls coated in chickpea batter and deep fried.",
    ingredients: ["potatoes", "chickpea flour", "turmeric", "mustard seeds", "curry leaves", "green chilies", "ginger", "oil"],
    steps: [
      "Boil and mash potatoes with tempered spices.",
      "Shape into balls.",
      "Make smooth chickpea batter with turmeric.",
      "Dip potato balls in batter.",
      "Deep fry until crispy and golden. Serve with chutney."
    ],
    tags: ["mumbai", "street-food", "crispy"], rating: 4.7, reviews: []
  },
  {
    id: 75, name: "Rogan Josh (Lamb)", category: "dinner", type: "non-veg",
    region: "Kashmir", time: 90, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
    description: "Kashmiri lamb curry with brilliant red sauce from local chilies and whole spices.",
    ingredients: ["1kg lamb", "yogurt", "kashmiri chilies", "fennel", "ginger powder", "cardamom", "cloves", "mustard oil"],
    steps: [
      "Brown lamb in hot mustard oil.",
      "Add kashmiri chili paste, cook until oil separates.",
      "Add whisked yogurt in batches.",
      "Add fennel, ginger, and whole spices.",
      "Cook covered until lamb is completely tender."
    ],
    tags: ["kashmiri", "lamb", "aromatic"], rating: 4.9, reviews: []
  },
  {
    id: 76, name: "Misal Pav", category: "breakfast", type: "veg",
    region: "Maharashtra", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    description: "Spicy sprouted moth bean curry served with crispy farsan and pav bread.",
    ingredients: ["sprouted moth beans", "farsan", "onion", "tomatoes", "misal masala", "tamarind", "pav bread", "lemon", "coriander"],
    steps: [
      "Cook sprouted beans with onion-tomato masala.",
      "Add misal masala and tamarind. Simmer 20 minutes.",
      "Toast pav buns with butter.",
      "Serve usal in bowl, top with farsan, onion, lemon.",
      "Enjoy with toasted pav."
    ],
    tags: ["maharashtrian", "spicy", "breakfast"], rating: 4.7, reviews: []
  },
  {
    id: 77, name: "Chicken Saag", category: "dinner", type: "non-veg",
    region: "Punjab", time: 50, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "Tender chicken pieces cooked in velvety spinach curry with garlic and cream.",
    ingredients: ["700g chicken", "500g spinach", "onion", "tomatoes", "cream", "ginger-garlic", "garam masala", "butter"],
    steps: [
      "Blanch and puree spinach.",
      "Cook chicken pieces with onion-tomato masala.",
      "Add spinach puree to chicken.",
      "Simmer together 15 minutes.",
      "Add cream and butter. Serve with naan."
    ],
    tags: ["iron-rich", "creamy", "punjabi"], rating: 4.7, reviews: []
  },
  {
    id: 78, name: "Sindhi Kadhi", category: "lunch", type: "veg",
    region: "Sindh", time: 40, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80",
    description: "Tangy gram flour vegetable curry with lotus stem — Sindhi comfort food.",
    ingredients: ["chickpea flour", "vegetables", "lotus stem", "tomatoes", "tamarind", "mustard seeds", "fenugreek", "curry leaves"],
    steps: [
      "Roast chickpea flour until golden.",
      "Add water slowly, whisk to remove lumps.",
      "Add tomatoes, tamarind, and vegetables.",
      "Cook on low heat 25 minutes, stirring.",
      "Temper with mustard seeds, fenugreek, curry leaves."
    ],
    tags: ["sindhi", "tangy", "unique"], rating: 4.6, reviews: []
  },
  {
    id: 79, name: "Meen Moilee", category: "dinner", type: "non-veg",
    region: "Kerala", time: 35, servings: 3, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Gentle coconut milk fish curry with turmeric and green chilies from Kerala.",
    ingredients: ["500g fish", "coconut milk", "onion", "green chilies", "ginger", "turmeric", "tomatoes", "coconut oil", "curry leaves"],
    steps: [
      "Marinate fish in turmeric and salt.",
      "Cook onion, ginger, chilies in coconut oil.",
      "Add thin coconut milk and tomatoes.",
      "Add fish and cook gently 10 minutes.",
      "Add thick coconut milk, heat through. Finish with curry leaves."
    ],
    tags: ["kerala", "coconut", "gentle"], rating: 4.7, reviews: []
  },
  {
    id: 80, name: "Ras Malai", category: "dinner", type: "veg",
    region: "Bengal", time: 60, servings: 8, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Soft paneer discs soaked in saffron-cardamom flavored thickened milk — a royal dessert.",
    ingredients: ["1 liter milk", "sugar", "cardamom", "saffron", "pistachios", "rose water"],
    steps: [
      "Make soft chenna (paneer), shape into flat discs.",
      "Cook in sugar syrup until doubled in size.",
      "Thicken milk with sugar, cardamom, saffron.",
      "Add cooked chenna discs to flavored milk.",
      "Chill for 2 hours. Garnish with pistachios and rose petals."
    ],
    tags: ["bengali", "royal", "dessert"], rating: 4.9, reviews: []
  },

  // Final 20 recipes
  {
    id: 81, name: "Puri Bhaji", category: "breakfast", type: "veg",
    region: "Maharashtra", time: 30, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    description: "Deep-fried puffed bread with spiced potato curry — a festive morning treat.",
    ingredients: ["wheat flour", "potatoes", "onion", "mustard seeds", "turmeric", "green chilies", "oil", "coriander"],
    steps: ["Make stiff dough and rest.", "Make spiced potato bhaji with tempering.", "Roll small circles and deep fry until puffed.", "Drain on paper.", "Serve hot with bhaji."],
    tags: ["festive", "traditional", "weekend"], rating: 4.7, reviews: []
  },
  {
    id: 82, name: "Mutton Biryani", category: "lunch", type: "non-veg",
    region: "Lucknow", time: 120, servings: 6, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    description: "Awadhi-style layered mutton and rice cooked on dum with saffron and whole spices.",
    ingredients: ["1kg mutton", "3 cups basmati rice", "yogurt", "saffron", "fried onions", "ghee", "whole spices", "kewra", "mint"],
    steps: ["Marinate mutton overnight.", "Parboil rice.", "Cook mutton in handi.", "Layer rice, saffron, fried onions.", "Cook on dum 40 minutes."],
    tags: ["lucknowi", "awadhi", "dum"], rating: 4.9, reviews: []
  },
  {
    id: 83, name: "Sri Lankan Kottu", category: "dinner", type: "non-veg",
    region: "Sri Lanka", time: 30, servings: 2, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Chopped roti stir-fried with vegetables, egg, and spices — Sri Lanka's street icon.",
    ingredients: ["godamba roti", "egg", "vegetables", "chicken", "curry powder", "soy sauce", "oil", "leek"],
    steps: ["Chop roti into small pieces.", "Beat eggs.", "Stir fry vegetables and chicken.", "Add roti and egg, chop on griddle.", "Season with curry powder and serve."],
    tags: ["sri-lankan", "street-food", "stir-fry"], rating: 4.6, reviews: []
  },
  {
    id: 84, name: "Nepali Dal Bhat", category: "lunch", type: "veg",
    region: "Nepal", time: 40, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80",
    description: "Nepal's national dish — steamed rice with lentil soup and seasonal vegetable curry.",
    ingredients: ["rice", "lentils", "seasonal vegetables", "cumin", "turmeric", "garlic", "ghee", "achar"],
    steps: ["Cook rice.", "Simmer dal with tempering.", "Make tarkari (vegetable curry).", "Make achar (pickle) with tomatoes.", "Serve in separate bowls together."],
    tags: ["nepali", "wholesome", "national-dish"], rating: 4.7, reviews: []
  },
  {
    id: 85, name: "Bangladeshi Hilsa Curry", category: "dinner", type: "non-veg",
    region: "Bangladesh", time: 35, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
    description: "Ilish fish cooked in mustard-poppy seed paste — Bangladesh's pride and joy.",
    ingredients: ["hilsa fish", "mustard paste", "poppy seed paste", "green chilies", "turmeric", "mustard oil", "salt"],
    steps: ["Marinate fish with turmeric.", "Blend mustard seeds and poppy seeds.", "Cook paste in mustard oil.", "Add fish and green chilies.", "Simmer gently until cooked."],
    tags: ["bangladeshi", "mustard", "traditional"], rating: 4.8, reviews: []
  },
  {
    id: 86, name: "Pakistani Karahi", category: "dinner", type: "non-veg",
    region: "Pakistan", time: 45, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "Chicken cooked in a wok with tomatoes, ginger, and Pakistani spices.",
    ingredients: ["chicken", "tomatoes", "ginger", "green chilies", "karahi masala", "oil", "coriander", "cream"],
    steps: ["Heat oil in karahi (wok).", "Cook chicken on high heat.", "Add tomatoes and cook down.", "Add ginger and spices.", "Finish with cream and fresh coriander."],
    tags: ["pakistani", "wok-cooked", "tomato-based"], rating: 4.8, reviews: []
  },
  {
    id: 87, name: "Rasam", category: "lunch", type: "veg",
    region: "Tamil Nadu", time: 20, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    description: "Thin, tangy, peppery South Indian soup — digestive and healing.",
    ingredients: ["tamarind", "tomatoes", "black pepper", "cumin", "garlic", "mustard seeds", "curry leaves", "coriander"],
    steps: ["Extract tamarind water.", "Cook with tomatoes and spices.", "Add rasam powder.", "Simmer 10 minutes.", "Temper with mustard seeds, garlic, curry leaves."],
    tags: ["south-indian", "digestive", "tangy"], rating: 4.6, reviews: []
  },
  {
    id: 88, name: "Sheer Khurma", category: "dinner", type: "veg",
    region: "Hyderabad", time: 45, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Rich vermicelli milk pudding with dates, dry fruits — Eid celebration dessert.",
    ingredients: ["vermicelli", "milk", "dates", "dry fruits", "cardamom", "saffron", "sugar", "ghee", "rose water"],
    steps: ["Fry vermicelli in ghee.", "Boil milk until slightly thick.", "Add fried vermicelli and dates.", "Add sugar, cardamom, saffron.", "Garnish with dry fruits, serve warm or chilled."],
    tags: ["eid", "dessert", "rich"], rating: 4.9, reviews: []
  },
  {
    id: 89, name: "Kheer", category: "dinner", type: "veg",
    region: "North India", time: 60, servings: 6, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Creamy rice pudding slowly cooked in milk with cardamom and saffron.",
    ingredients: ["basmati rice", "milk", "sugar", "cardamom", "saffron", "almonds", "pistachios", "rose water"],
    steps: ["Rinse rice.", "Cook milk on low heat, stirring frequently.", "Add rice and cook 45 minutes until creamy.", "Add sugar, cardamom, saffron.", "Chill and garnish with nuts."],
    tags: ["dessert", "festival", "sweet"], rating: 4.8, reviews: []
  },
  {
    id: 90, name: "Chicken 65", category: "dinner", type: "non-veg",
    region: "Chennai", time: 35, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Chennai's iconic crispy spiced chicken fry — fiery red and irresistibly crunchy.",
    ingredients: ["chicken", "yogurt", "red chili powder", "ginger-garlic", "corn flour", "curry leaves", "food color", "oil"],
    steps: ["Marinate chicken with spices, yogurt, corn flour.", "Rest 2 hours.", "Deep fry until crispy and red.", "Temper fresh curry leaves in oil.", "Toss chicken in curry leaves and serve."],
    tags: ["chennai", "crispy", "spicy"], rating: 4.8, reviews: []
  },
  {
    id: 91, name: "Malabar Parota", category: "breakfast", type: "veg",
    region: "Kerala", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    description: "Layered, flaky flat bread with hundreds of crispy layers — Kerala's prized bread.",
    ingredients: ["maida flour", "egg", "oil", "salt", "water"],
    steps: ["Make soft dough with egg and oil.", "Rest 30 minutes.", "Roll thin, fold into layers multiple times.", "Roll and cook on hot griddle.", "Crush between palms to separate layers."],
    tags: ["kerala", "layered", "flaky"], rating: 4.8, reviews: []
  },
  {
    id: 92, name: "Phirni", category: "dinner", type: "veg",
    region: "Kashmir/Punjab", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Set rice milk pudding with cardamom and pistachios in earthen bowls.",
    ingredients: ["basmati rice", "milk", "sugar", "cardamom", "saffron", "pistachios", "rose water"],
    steps: ["Soak and coarsely grind rice.", "Boil milk until thick.", "Add rice paste, cook until further thick.", "Add sugar, cardamom, rose water.", "Pour in earthen bowls, chill and serve."],
    tags: ["dessert", "kashmiri", "set-pudding"], rating: 4.7, reviews: []
  },
  {
    id: 93, name: "Egg Curry", category: "lunch", type: "non-veg",
    region: "Pan India", time: 30, servings: 4, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    description: "Hard-boiled eggs in a spicy onion-tomato gravy — quick and satisfying.",
    ingredients: ["6 eggs", "onion", "tomatoes", "ginger-garlic", "cumin", "turmeric", "garam masala", "oil", "coriander"],
    steps: ["Boil eggs, peel and slit.", "Cook onion-tomato masala.", "Add spices and cook well.", "Add eggs, coat with masala.", "Simmer 10 minutes. Garnish with coriander."],
    tags: ["quick", "protein", "everyday"], rating: 4.5, reviews: []
  },
  {
    id: 94, name: "Puliogare", category: "lunch", type: "veg",
    region: "Karnataka", time: 30, servings: 4, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80",
    description: "Tamarind rice with roasted peanuts and South Indian tempering.",
    ingredients: ["cooked rice", "tamarind", "peanuts", "mustard seeds", "chana dal", "dry red chilies", "turmeric", "jaggery", "curry leaves"],
    steps: ["Make tamarind paste with puliogare spice mix.", "Temper mustard seeds, dal, peanuts, curry leaves.", "Add tamarind paste and cook.", "Mix with cooked rice.", "Adjust salt and serve."],
    tags: ["karnataka", "tamarind", "travel-friendly"], rating: 4.5, reviews: []
  },
  {
    id: 95, name: "Kathi Roll", category: "lunch", type: "non-veg",
    region: "Kolkata", time: 30, servings: 2, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    description: "Kolkata's famous egg-coated flatbread wrapped around spiced chicken or paneer.",
    ingredients: ["paratha", "egg", "chicken tikka", "onion", "green chutney", "chaat masala", "lemon"],
    steps: ["Cook paratha, pour beaten egg on top.", "Cook until egg is set on both sides.", "Place chicken tikka strips on paratha.", "Add onion, chutney, chaat masala.", "Roll tight and serve with chutney."],
    tags: ["kolkata", "street-food", "wrap"], rating: 4.7, reviews: []
  },
  {
    id: 96, name: "Chana Dal Halwa", category: "dinner", type: "veg",
    region: "North India", time: 60, servings: 6, difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
    description: "Rich slow-cooked Bengal gram pudding with ghee, sugar, and dry fruits.",
    ingredients: ["chana dal", "sugar", "ghee", "cardamom", "saffron", "cashews", "almonds", "raisins"],
    steps: ["Soak and cook chana dal until very soft.", "Blend smooth.", "Cook in ghee, stirring continuously.", "Add sugar and keep stirring.", "Add cardamom, nuts, saffron. Serve warm."],
    tags: ["dessert", "slow-cooked", "rich"], rating: 4.6, reviews: []
  },
  {
    id: 97, name: "Egg Masala Bhurji", category: "breakfast", type: "non-veg",
    region: "North India", time: 15, servings: 2, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&q=80",
    description: "Fluffy spiced scrambled eggs with a North Indian masala twist.",
    ingredients: ["4 eggs", "onion", "tomato", "green chili", "cumin", "turmeric", "red chili", "coriander", "butter"],
    steps: ["Heat butter, sauté onions.", "Add tomatoes and spices.", "Beat eggs and pour.", "Scramble on medium heat.", "Garnish with coriander and serve."],
    tags: ["quick", "protein", "breakfast"], rating: 4.6, reviews: []
  },
  {
    id: 98, name: "Chicken Rezala", category: "dinner", type: "non-veg",
    region: "Bengal", time: 50, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
    description: "White-sauced chicken curry with yogurt and whole spices — subtle Mughal elegance.",
    ingredients: ["chicken", "white onion paste", "yogurt", "white pepper", "cardamom", "cream", "ghee", "kewra", "rose water"],
    steps: ["Marinate chicken in yogurt and spices.", "Cook onion paste in ghee.", "Add chicken and cook.", "Add cream and white pepper.", "Finish with kewra and rose water."],
    tags: ["mughal", "white-curry", "bengali"], rating: 4.7, reviews: []
  },
  {
    id: 99, name: "Kulfi", category: "dinner", type: "veg",
    region: "North India", time: 30, servings: 6, difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
    description: "Dense, creamy Indian ice cream with pistachio and cardamom — a street classic.",
    ingredients: ["full fat milk", "sugar", "cardamom", "saffron", "pistachios", "cornstarch"],
    steps: ["Boil milk until reduced to half.", "Add sugar, cornstarch, cardamom, saffron.", "Pour in kulfi molds or earthen cups.", "Add pistachios.", "Freeze 6-8 hours. Unmold and serve."],
    tags: ["dessert", "ice-cream", "summer"], rating: 4.8, reviews: []
  },
  {
    id: 100, name: "Hyderabadi Egg Dum Biryani", category: "dinner", type: "non-veg",
    region: "Hyderabad", time: 60, servings: 4, difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    description: "Fragrant dum biryani with boiled eggs, caramelized onions, and saffron rice.",
    ingredients: ["6 eggs", "basmati rice", "biryani masala", "fried onions", "mint", "saffron", "ghee", "yogurt", "whole spices"],
    steps: ["Hard boil eggs, fry until golden. Slit.", "Parboil rice.", "Make egg masala gravy.", "Layer rice over egg masala.", "Cook on dum 20 minutes. Serve with raita."],
    tags: ["hyderabadi", "dum", "unique"], rating: 4.8, reviews: []
  }
];

// App state
const state = {
  favorites: JSON.parse(localStorage.getItem('snap-savor-favorites') || '[]'),
  planner: JSON.parse(localStorage.getItem('snap-savor-planner') || '{}'),
  currentPage: 'home',
  filters: { category: 'all', type: 'all', search: '', ingredients: [] }
};

function saveFavorites() {
  localStorage.setItem('snap-savor-favorites', JSON.stringify(state.favorites));
}

function savePlanner() {
  localStorage.setItem('snap-savor-planner', JSON.stringify(state.planner));
}

function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) state.favorites.push(id);
  else state.favorites.splice(idx, 1);
  saveFavorites();
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function addToPlanner(id, day, meal) {
  if (!state.planner[day]) state.planner[day] = {};
  if (!state.planner[day][meal]) state.planner[day][meal] = [];
  if (!state.planner[day][meal].includes(id)) {
    state.planner[day][meal].push(id);
    savePlanner();
    return true;
  }
  return false;
}

function removeFromPlanner(id, day, meal) {
  if (state.planner[day] && state.planner[day][meal]) {
    state.planner[day][meal] = state.planner[day][meal].filter(r => r !== id);
    savePlanner();
  }
}

function getRecipeById(id) {
  return RECIPES.find(r => r.id === id);
}

function getFilteredRecipes() {
  return RECIPES.filter(r => {
    if (state.filters.category !== 'all' && r.category !== state.filters.category) return false;
    if (state.filters.type !== 'all' && r.type !== state.filters.type) return false;
    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      if (!r.name.toLowerCase().includes(q) && !r.region.toLowerCase().includes(q) &&
          !r.tags.some(t => t.includes(q)) && !r.description.toLowerCase().includes(q)) return false;
    }
    if (state.filters.ingredients.length > 0) {
      const ri = r.ingredients.join(' ').toLowerCase();
      if (!state.filters.ingredients.every(i => ri.includes(i.toLowerCase()))) return false;
    }
    return true;
  });
}
