// Select the main image and caption
const featured = document.getElementById('featured');
const caption = document.getElementById('caption');
const ul = document.querySelector('ul.thumbnails'); // thumbnails container

// Array of objects for each image
const gallery = [
    { full: 'images/flowers-pink-large.jpg', thumb: 'images/flowers-pink-small.jpg', desc: 'Pink Flowers - Market in Münster, Germany' },
    { full: 'images/flowers-purple-large.jpg', thumb: 'images/flowers-purple-small.jpg', desc: 'Purple Flowers - Sentmaring Park, Münster, Germany' },
    { full: 'images/flowers-red-large.jpg', thumb: 'images/flowers-red-small.jpg', desc: 'Red Flowers - Poppies in Dülmen, Germany' },
    { full: 'images/flowers-white-large.jpg', thumb: 'images/flowers-white-small.jpg', desc: 'White Flowers - Daffodils in Münster, Germany' },
    { full: 'images/flowers-yellow-large.jpg', thumb: 'images/flowers-yellow-small.jpg', desc: 'Yellow Flowers - Sunflowers in Dülmen, Germany' }
];

// Clear the list and create thumbnails dynamically
ul.innerHTML = '';
gallery.forEach((item, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.thumb;
    img.dataset.full = item.full;
    img.alt = item.desc;
    img.style.filter = index === 0 ? 'grayscale(0%)' : 'grayscale(100%)'; // first thumbnail active
    li.appendChild(img);
    ul.appendChild(li);

    // Click event for each thumbnail
    img.addEventListener('click', () => {
        // Smooth opacity animation
        featured.style.opacity = 0;
        setTimeout(() => {
            featured.src = item.full;
            caption.textContent = item.desc;
            featured.style.opacity = 1;
        }, 200);

        // Update thumbnail filters
        document.querySelectorAll('.thumbnails img').forEach(img => img.style.filter = 'grayscale(100%)');
        img.style.filter = 'grayscale(0%)';
    });
});

// Initial setup: first image and caption
featured.src = gallery[0].full;
caption.textContent = gallery[0].desc;
featured.style.opacity = 1;