import recipes from './recipes.mjs';

const container = document.getElementById('recipe-container');

// Convert rating number to stars
function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return '⭐'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(5 - fullStars - (halfStar ? 1 : 0));
}

recipes.forEach(recipe => {
  const card = document.createElement('section');
  card.classList.add('recipe-card');

  const tagsHTML = recipe.tags.map(tag => `<span>${tag}</span>`).join('');
  const ratingStars = getStarRating(recipe.rating);

  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <div class="tags">${tagsHTML}</div>
    <h2>${recipe.name}</h2>
    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5">${ratingStars}</span>
    <p class="description">${recipe.description}</p>
  `;

  container.appendChild(card);
});
