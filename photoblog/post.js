import { imageData } from './imagedata.js';

// Extract the string ID from the URL
function getPostIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Populate the main post content
function displayPost(post) {
  document.getElementById('post-title').textContent = post.title;

  const img = document.getElementById('post-image');
  img.src = post.image;
  img.alt = post.alt || post.title;

  document.getElementById('post-preview').textContent = post.preview;
  document.getElementById('post-description').textContent = post.description;
  document.getElementById('post-camera').textContent = `Camera Info: ${post.camera}`;
}

// Populate related images based on matching tags
function displayRelated(post) {
  const container = document.getElementById('related-thumbnails');
  const sectionHeading = document.querySelector('.related-images h2');
  container.innerHTML = '';

  // Pick a random tag from the current post
  const randomTag = post.tags[Math.floor(Math.random() * post.tags.length)];

  // Update the heading
  sectionHeading.textContent = `Other Images Tagged "${randomTag}"`;

  // Filter other images that include the same tag
  const matchingPosts = imageData.filter(
    img => img.id !== post.id && img.tags.includes(randomTag)
  );

  // Show a message if no matches
  if (matchingPosts.length === 0) {
    container.innerHTML = '<p>No other images with this tag.</p>';
    return;
  }

  // Create and append thumbnails
  matchingPosts.forEach(img => {
    const thumb = document.createElement('a');
    thumb.href = `post.html?id=${img.id}`;
    thumb.classList.add('thumbnail');

    thumb.innerHTML = `
      <img src="${img.image}" alt="${img.title}" />
      <p class="thumb-title">${img.title}</p>
    `;

    container.appendChild(thumb);
  });
}

// Main logic
const postId = getPostIdFromURL();
const post = imageData.find((img) => img.id === postId);

if (post) {
  displayPost(post);
  displayRelated(post);
} else {
  document.querySelector('.post-content').innerHTML = '<p>Post not found.</p>';
}
