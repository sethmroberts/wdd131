import { imageData } from './imagedata.js';

const gallery = document.getElementById('image-gallery');
const filterContainer = document.getElementById('tag-filters');

// Get unique tags
const allTags = [...new Set(imageData.flatMap(item => item.tags))];

// Build tag filter buttons
allTags.forEach(tag => {
  const btn = document.createElement('button');
  btn.textContent = tag;
  btn.dataset.tag = tag;
  btn.addEventListener('click', () => filterByTag(tag));
  filterContainer.appendChild(btn);
});

// Render all cards on load
renderImages(imageData);

// Show filtered images
function filterByTag(tag) {
  const filtered = imageData.filter(img => img.tags.includes(tag));
  renderImages(filtered);
}

// Card builder
function renderImages(images) {
  gallery.innerHTML = '';
  images.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
      <strong>${item.title}</strong><br />
      <img src="${item.image}" alt="${item.title}" style="max-width: 300px"><br />
      <em>Preview Text:</em> ${item.preview}<br />
      <a href="post.html?id=${item.id}">See More</a><br />
      <em>Tags:</em> ${item.tags.map(t => `<code>${t}</code>`).join(', ')}
    `;

    gallery.appendChild(li);
  });
}
