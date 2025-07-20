import { imageData } from './imagedata.js';

// Get query parameter
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const container = document.getElementById('post-container');

// Find image by ID
const image = imageData.find(img => img.id === id);

if (image) {
  container.innerHTML = `
    <h2>${image.title}</h2>
    <img src="${image.image}" alt="${image.title}" style="max-width: 600px"><br />
    <p><em>${image.preview}</em></p>
    <p>${image.description}</p>
    <p><strong>Camera Info:</strong> ${image.camera}</p>
    <p><strong>Tags:</strong> ${image.tags.map(tag => `<code>${tag}</code>`).join(', ')}</p>
    <hr />
    <h3>Related Posts:</h3>
    <ul id="related-posts"></ul>
  `;

  // Show related items with one shared tag
  const relatedTag = image.tags[Math.floor(Math.random() * image.tags.length)];
  const related = imageData.filter(img => img.id !== id && img.tags.includes(relatedTag)).slice(0, 4);

  const relatedList = document.getElementById('related-posts');
  related.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="post.html?id=${item.id}">
        <img src="${item.image}" alt="${item.title}" style="max-width: 150px"><br />
        ${item.title}
      </a>
    `;
    relatedList.appendChild(li);
  });
} else {
  container.textContent = 'Post not found.';
}
