/* ============================================================
   SNAP·SAVOR — Application Logic
   ============================================================ */

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEALS = [
  { id: 'breakfast', label: 'Breakfast', icon: '🌅' },
  { id: 'lunch', label: 'Lunch', icon: '☀️' },
  { id: 'dinner', label: 'Dinner', icon: '🌙' }
];

let planPickerRecipeId = null;
let planPickerStep = 'day'; // 'day' | 'meal'
let planPickerDay = null;
let currentModalId = null;
let starSelected = 0;

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initLeaves();
  renderHome();
  renderPlanner();
  renderFavorites();
  bindNav();
  bindHeroSearch();
  bindPlanPicker();
  initScrollTop();
  updateNavBadges();
});

// ============ NAVIGATION ============
function bindNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => navigateTo(el.dataset.page));
  });
}

function navigateTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page)?.classList.add('active');
  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'recipes') renderRecipes();
  if (page === 'planner') renderPlanner();
  if (page === 'favorites') renderFavorites();
}

function updateNavBadges() {
  const favBadge = document.getElementById('fav-badge');
  const planBadge = document.getElementById('plan-badge');
  if (favBadge) favBadge.textContent = state.favorites.length;
  const planCount = Object.values(state.planner).reduce((sum, day) => {
    return sum + Object.values(day).reduce((s, arr) => s + arr.length, 0);
  }, 0);
  if (planBadge) planBadge.textContent = planCount;
}

// ============ LEAVES ANIMATION ============
function initLeaves() {
  const container = document.querySelector('.hero-leaves');
  if (!container) return;
  const icons = ['🌿', '🍃', '🌱', '🌾', '🍀', '🫛', '🌲'];
  for (let i = 0; i < 18; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.textContent = icons[Math.floor(Math.random() * icons.length)];
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.animationDuration = (8 + Math.random() * 14) + 's';
    leaf.style.animationDelay = (Math.random() * 12) + 's';
    leaf.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
    container.appendChild(leaf);
  }
}

// ============ HOME ============
function renderHome() {
  renderFeaturedRecipes();
  renderCategoryCards();
  bindFeaturedTags();
}

function renderFeaturedRecipes() {
  const container = document.getElementById('featured-recipes');
  if (!container) return;
  const featured = RECIPES.filter(r => r.rating >= 4.8).slice(0, 6);
  container.innerHTML = featured.map(r => recipeCardHTML(r)).join('');
  bindCardEvents(container);
}

function bindFeaturedTags() {
  document.querySelectorAll('.featured-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const type = tag.dataset.filter;
      state.filters = { category: 'all', type: type || 'all', search: '', ingredients: [] };
      navigateTo('recipes');
    });
  });
}

function renderCategoryCards() {
  const cats = [
    { id: 'breakfast', label: 'Breakfast', desc: '28 Recipes', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80' },
    { id: 'lunch', label: 'Lunch', desc: '36 Recipes', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80' },
    { id: 'dinner', label: 'Dinner', desc: '36 Recipes', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80' }
  ];
  const container = document.getElementById('category-cards');
  if (!container) return;
  container.innerHTML = cats.map(c => `
    <div class="category-card" onclick="filterByCategory('${c.id}')">
      <img src="${c.img}" alt="${c.label}" loading="lazy">
      <div class="category-card-overlay">
        <h3>${c.label}</h3>
        <span>${c.desc}</span>
      </div>
    </div>
  `).join('');
}

function filterByCategory(cat) {
  state.filters = { category: cat, type: 'all', search: '', ingredients: [] };
  navigateTo('recipes');
}

// ============ RECIPES PAGE ============
function renderRecipes() {
  renderFilterBar();
  renderRecipeGrid();
}

function renderFilterBar() {
  const bar = document.getElementById('recipe-filter-bar');
  if (!bar) return;

  const cats = ['all', 'breakfast', 'lunch', 'dinner'];
  const catLabels = { all: '🍽 All', breakfast: '🌅 Breakfast', lunch: '☀️ Lunch', dinner: '🌙 Dinner' };
  const types = ['all', 'veg', 'non-veg'];
  const typeLabels = { all: '🥘 All', veg: '🥦 Veg', 'non-veg': '🍗 Non-Veg' };

  bar.innerHTML = `
    <div class="filter-group">
      <span class="filter-label">Meal</span>
      ${cats.map(c => `
        <button class="filter-chip ${state.filters.category === c ? 'active' : ''}" onclick="setFilter('category','${c}')">${catLabels[c]}</button>
      `).join('')}
    </div>
    <div class="filter-divider"></div>
    <div class="filter-group">
      <span class="filter-label">Type</span>
      ${types.map(t => `
        <button class="filter-chip ${t === 'veg' ? 'veg' : t === 'non-veg' ? 'nonveg' : ''} ${state.filters.type === t ? 'active' : ''}" onclick="setFilter('type','${t}')">${typeLabels[t]}</button>
      `).join('')}
    </div>
    <div class="filter-divider"></div>
    <div class="ingredient-search">
      <span class="filter-label">🔍 By Ingredient</span>
      <input type="text" id="ingr-input" placeholder="e.g. paneer, chicken..." onkeydown="handleIngrKey(event)">
      ${state.filters.ingredients.map(i => `
        <span class="ingredient-tag">${i} <button onclick="removeIngredient('${i}')">×</button></span>
      `).join('')}
    </div>
  `;

  // Rebind search from hero if query exists
  const heroSearch = document.getElementById('hero-search-val');
  if (heroSearch && heroSearch.value && !state.filters.search) {
    state.filters.search = heroSearch.value;
    heroSearch.value = '';
  }
}

function setFilter(key, val) {
  state.filters[key] = val;
  renderRecipes();
}

function handleIngrKey(e) {
  if (e.key === 'Enter' && e.target.value.trim()) {
    state.filters.ingredients.push(e.target.value.trim().toLowerCase());
    renderRecipes();
  }
}

function removeIngredient(i) {
  state.filters.ingredients = state.filters.ingredients.filter(x => x !== i);
  renderRecipes();
}

function renderRecipeGrid() {
  const container = document.getElementById('recipes-grid');
  const countEl = document.getElementById('recipe-count');
  if (!container) return;

  const filtered = getFilteredRecipes();
  if (countEl) countEl.textContent = filtered.length + ' recipes';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column:1/-1">
        <div class="no-results-icon">🍳</div>
        <h3>No recipes found</h3>
        <p>Try different filters or ingredients</p>
        <button class="btn-primary mt-1" onclick="clearFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(r => recipeCardHTML(r)).join('');
  bindCardEvents(container);
}

function clearFilters() {
  state.filters = { category: 'all', type: 'all', search: '', ingredients: [] };
  renderRecipes();
}

// ============ RECIPE CARD HTML ============
function recipeCardHTML(r) {
  const fav = isFavorite(r.id);
  const stars = '★'.repeat(Math.round(r.rating)) + '☆'.repeat(5 - Math.round(r.rating));
  return `
    <div class="recipe-card" data-id="${r.id}">
      <div class="card-img-wrap">
        <img src="${r.image}" alt="${r.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80'">
        <div class="card-badge">
          <span class="badge badge-${r.type === 'veg' ? 'veg' : 'nonveg'}">${r.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</span>
          <span class="badge badge-cat">${capitalize(r.category)}</span>
        </div>
        <button class="card-fav ${fav ? 'active' : ''}" data-fav="${r.id}" title="${fav ? 'Remove from favorites' : 'Add to favorites'}">
          ${fav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>🕐 ${r.time} min</span>
          <span class="meta-dot">·</span>
          <span>👥 ${r.servings} servings</span>
          <span class="meta-dot">·</span>
          <span>📊 ${r.difficulty}</span>
          <span class="meta-dot">·</span>
          <span>📍 ${r.region}</span>
        </div>
        <h3 class="card-title">${r.name}</h3>
        <p class="card-desc">${r.description}</p>
        <div class="card-footer">
          <div class="card-rating">
            <span class="stars">${stars}</span>
            <span class="rating-num">${r.rating}</span>
          </div>
          <div class="card-actions">
            <button class="btn-icon add-plan" data-planid="${r.id}" title="Add to meal planner">📅</button>
            <button class="btn-icon view-recipe" data-viewid="${r.id}" title="View recipe">👁</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindCardEvents(container) {
  container.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.fav);
      toggleFavorite(id);
      const isFav = isFavorite(id);
      btn.textContent = isFav ? '❤️' : '🤍';
      btn.classList.toggle('active', isFav);
      showToast(isFav ? '❤️ Added to favorites!' : '💔 Removed from favorites', isFav ? 'success' : '');
      updateNavBadges();
      // Update favorites page if visible
      if (state.currentPage === 'favorites') renderFavorites();
    });
  });

  container.querySelectorAll('[data-planid]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openPlanPicker(parseInt(btn.dataset.planid));
    });
  });

  container.querySelectorAll('[data-viewid]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openModal(parseInt(btn.dataset.viewid));
    });
  });

  container.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

// ============ RECIPE MODAL ============
function openModal(id) {
  const r = getRecipeById(id);
  if (!r) return;
  currentModalId = id;
  starSelected = 0;

  const modal = document.getElementById('recipe-modal');
  const stars = '★'.repeat(Math.round(r.rating));

  modal.querySelector('.modal-hero img').src = r.image;
  modal.querySelector('.modal-hero img').alt = r.name;
  modal.querySelector('.modal-title').textContent = r.name;

  modal.querySelector('.modal-chips').innerHTML = `
    <span class="chip chip-sage">📍 ${r.region}</span>
    <span class="chip chip-terra">🕐 ${r.time} min</span>
    <span class="chip chip-gold">👥 ${r.servings} servings</span>
    <span class="chip chip-sage">📊 ${r.difficulty}</span>
    <span class="chip ${r.type === 'veg' ? 'chip-sage' : 'chip-terra'}">${r.type === 'veg' ? '🟢 Vegetarian' : '🔴 Non-Vegetarian'}</span>
    <span class="chip chip-gold">☀️ ${capitalize(r.category)}</span>
    <span class="chip chip-sage">⭐ ${r.rating} rating</span>
  `;

  modal.querySelector('.modal-desc').textContent = r.description;

  modal.querySelector('.modal-ingredients').innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');
  modal.querySelector('.modal-steps').innerHTML = r.steps.map((s, i) => `
    <li><span class="step-num">${i + 1}</span><span>${s}</span></li>
  `).join('');

  // Render existing reviews
  renderReviews(r, modal);

  // Reset star rating
  modal.querySelectorAll('.star-btn').forEach(s => s.classList.remove('active'));
  modal.querySelector('#feedback-text').value = '';

  const favBtn = modal.querySelector('#modal-fav-btn');
  favBtn.textContent = isFavorite(id) ? '❤️ In Favorites' : '🤍 Add to Favorites';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderReviews(r, modal) {
  const container = modal.querySelector('.reviews-list');
  if (r.reviews.length === 0) {
    container.innerHTML = '<p style="color:var(--text-light);font-size:0.85rem;">No reviews yet. Be the first!</p>';
    return;
  }
  container.innerHTML = r.reviews.map(rv => `
    <div class="review-item">
      <div class="review-header">
        <span>👤 ${rv.name || 'Guest'}</span>
        <span class="review-stars">${'★'.repeat(rv.rating)}${'☆'.repeat(5 - rv.rating)}</span>
      </div>
      <p class="review-text">${rv.text}</p>
    </div>
  `).join('');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalId = null;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);

  // Star rating in modal
  document.querySelectorAll('.star-btn').forEach(star => {
    star.addEventListener('click', () => {
      starSelected = parseInt(star.dataset.star);
      document.querySelectorAll('.star-btn').forEach((s, i) => {
        s.classList.toggle('active', i < starSelected);
        s.textContent = i < starSelected ? '★' : '☆';
      });
    });

    star.addEventListener('mouseenter', () => {
      const n = parseInt(star.dataset.star);
      document.querySelectorAll('.star-btn').forEach((s, i) => {
        s.textContent = i < n ? '★' : '☆';
      });
    });

    star.addEventListener('mouseleave', () => {
      document.querySelectorAll('.star-btn').forEach((s, i) => {
        s.textContent = i < starSelected ? '★' : '☆';
        s.classList.toggle('active', i < starSelected);
      });
    });
  });

  // Submit feedback
  document.getElementById('submit-review').addEventListener('click', () => {
    if (!currentModalId) return;
    const text = document.getElementById('feedback-text').value.trim();
    if (!starSelected) { showToast('⭐ Please select a star rating!', 'error'); return; }

    const r = getRecipeById(currentModalId);
    r.reviews.push({ name: 'You', rating: starSelected, text: text || 'Great recipe!' });

    // Update rating average
    const avg = r.reviews.reduce((s, rv) => s + rv.rating, 0) / r.reviews.length;
    r.rating = Math.round(avg * 10) / 10;

    renderReviews(r, document.getElementById('recipe-modal'));
    document.getElementById('feedback-text').value = '';
    starSelected = 0;
    document.querySelectorAll('.star-btn').forEach(s => { s.textContent = '☆'; s.classList.remove('active'); });
    showToast('✅ Review submitted!', 'success');
  });

  // Favorite from modal
  document.getElementById('modal-fav-btn').addEventListener('click', () => {
    if (!currentModalId) return;
    toggleFavorite(currentModalId);
    const isFav = isFavorite(currentModalId);
    document.getElementById('modal-fav-btn').textContent = isFav ? '❤️ In Favorites' : '🤍 Add to Favorites';
    showToast(isFav ? '❤️ Added to favorites!' : '💔 Removed from favorites', isFav ? 'success' : '');
    updateNavBadges();
    if (state.currentPage === 'favorites') renderFavorites();
  });

  // Add to planner from modal
  document.getElementById('modal-plan-btn').addEventListener('click', () => {
    if (!currentModalId) return;
    openPlanPicker(currentModalId);
  });
});

// ============ PLAN PICKER ============
function openPlanPicker(recipeId) {
  planPickerRecipeId = recipeId;
  planPickerStep = 'day';
  planPickerDay = null;
  renderPlanPickerDay();
  document.getElementById('plan-picker').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlanPicker() {
  document.getElementById('plan-picker').classList.remove('open');
  document.body.style.overflow = '';
}

function bindPlanPicker() {
  document.getElementById('plan-picker').addEventListener('click', e => {
    if (e.target === e.currentTarget) closePlanPicker();
  });
  document.getElementById('plan-picker-close').addEventListener('click', closePlanPicker);
}

function renderPlanPickerDay() {
  const box = document.getElementById('plan-picker-content');
  const r = getRecipeById(planPickerRecipeId);
  box.innerHTML = `
    <h3>📅 Add "${r?.name}" to Planner</h3>
    <p style="color:var(--text-light);font-size:0.9rem;margin-bottom:1rem;">Choose a day:</p>
    <div class="plan-picker-grid">
      ${DAYS.map(d => `
        <button class="plan-day-btn" onclick="selectPlanDay('${d}')">
          <strong>${d}</strong>
          <small>${getPlannerDayCount(d)} items</small>
        </button>
      `).join('')}
    </div>
    <button class="plan-back" onclick="closePlanPicker()">✕ Cancel</button>
  `;
}

function getPlannerDayCount(day) {
  if (!state.planner[day]) return '0';
  return Object.values(state.planner[day]).reduce((s, arr) => s + arr.length, 0) + ' meals';
}

function selectPlanDay(day) {
  planPickerDay = day;
  renderPlanPickerMeal();
}

function renderPlanPickerMeal() {
  const box = document.getElementById('plan-picker-content');
  const r = getRecipeById(planPickerRecipeId);
  // Suggest meal based on recipe category
  const suggested = r?.category || 'lunch';
  box.innerHTML = `
    <h3>🍽 Which meal on ${planPickerDay}?</h3>
    <div class="plan-meal-btns">
      ${MEALS.map(m => `
        <button class="plan-meal-btn ${m.id}" onclick="confirmAddToPlan('${m.id}')">
          ${m.icon} ${m.label} ${m.id === suggested ? '<small style="opacity:0.6">(Suggested)</small>' : ''}
        </button>
      `).join('')}
    </div>
    <button class="plan-back" onclick="renderPlanPickerDay()">← Back</button>
  `;
}

function confirmAddToPlan(meal) {
  const added = addToPlanner(planPickerRecipeId, planPickerDay, meal);
  closePlanPicker();
  if (added) {
    showToast(`📅 Added to ${planPickerDay} ${capitalize(meal)}!`, 'success');
    updateNavBadges();
    if (state.currentPage === 'planner') renderPlanner();
  } else {
    showToast('Already in your plan!', '');
  }
}

// ============ PLANNER PAGE ============
function renderPlanner() {
  const grid = document.getElementById('planner-grid');
  if (!grid) return;

  grid.innerHTML = DAYS.map(day => {
    const dayPlan = state.planner[day] || {};
    return `
      <div class="day-card">
        <div class="day-header">
          <h3>${day}</h3>
          <span class="day-date">${getDayDate(day)}</span>
        </div>
        <div class="day-meals">
          ${MEALS.map(m => {
            const items = (dayPlan[m.id] || []);
            return `
              <div class="meal-slot">
                <div class="meal-slot-label">
                  <span class="meal-icon">${m.icon}</span> ${m.label}
                </div>
                <div class="meal-items">
                  ${items.length === 0
                    ? `<div class="meal-empty" onclick="openPlanPickerForSlot('${day}','${m.id}')">+ Add</div>`
                    : items.map(id => {
                        const r = getRecipeById(id);
                        return `
                          <div class="meal-item">
                            <span class="meal-item-name">${r?.name || '?'}</span>
                            <button class="meal-item-remove" onclick="removePlanItem(${id},'${day}','${m.id}')" title="Remove">×</button>
                          </div>
                        `;
                      }).join('') +
                      `<div class="meal-empty" onclick="openPlanPickerForSlot('${day}','${m.id}')">+ Add</div>`
                  }
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function getDayDate(dayName) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const today = new Date();
  const todayDay = today.getDay();
  const targetDay = days.indexOf(dayName);
  let diff = targetDay - todayDay;
  if (diff < 0) diff += 7;
  const date = new Date(today);
  date.setDate(today.getDate() + diff);
  return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
}

function openPlanPickerForSlot(day, meal) {
  // Open plan picker but skip day selection
  planPickerRecipeId = null;
  // navigate to recipes instead
  showToast('Browse recipes and use 📅 to add to planner!', '');
  navigateTo('recipes');
}

function removePlanItem(id, day, meal) {
  removeFromPlanner(id, day, meal);
  renderPlanner();
  updateNavBadges();
  showToast('🗑 Removed from planner', '');
}

// ============ FAVORITES PAGE ============
function renderFavorites() {
  const container = document.getElementById('favorites-grid');
  if (!container) return;

  if (state.favorites.length === 0) {
    container.innerHTML = `
      <div class="fav-empty" style="grid-column:1/-1">
        <div class="fav-empty-icon">💔</div>
        <h3>No favorites yet</h3>
        <p>Tap the heart icon on any recipe to save it here!</p>
        <button class="btn-primary" onclick="navigateTo('recipes')">Browse Recipes</button>
      </div>
    `;
    return;
  }

  const favRecipes = RECIPES.filter(r => state.favorites.includes(r.id));
  container.innerHTML = favRecipes.map(r => recipeCardHTML(r)).join('');
  bindCardEvents(container);
}

// ============ HERO SEARCH ============
function bindHeroSearch() {
  const form = document.getElementById('hero-search-form');
  const input = document.getElementById('hero-search-input');
  if (!form || !input) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    state.filters = { category: 'all', type: 'all', search: q, ingredients: [] };
    navigateTo('recipes');
    input.value = '';
  });
}

function searchHero(q) {
  state.filters = { category: 'all', type: 'all', search: q, ingredients: [] };
  navigateTo('recipes');
}

// ============ UTILITY ============
function capitalize(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
