import { items } from './data.js';

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));

// Display items dynamically
function displayItems(items) {
    const container = document.getElementById('item-container');
    container.innerHTML = '';
    items.forEach(item => {
        container.innerHTML += `
        <div class="item">
            <h3>${item.name}</h3>
            <p>Category: ${item.category}</p>
            <p>Price: $${item.price}</p>
            <p>${item.description}</p>
        </div>`;
    });
}
displayItems(items);

// Modal functionality
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => modal.style.display = 'flex');
});
closeModal.addEventListener('click', () => modal.style.display = 'none');

// Local Storage example
if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    alert('Welcome to the site!');
}

// Example fetch (if using external API)
async function fetchData() {
    try {
        const response = await fetch('data/data.json');
        const data = await response.json();
        displayItems(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
// fetchData(); // Uncomment if you have API or JSON file
