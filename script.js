// Log a message to confirm the script is running
console.log("Asthma Awareness website is running!");

// Add functionality to the "Learn More" button
document.querySelector(".hero button").addEventListener("click", () => {
    alert("Learn more about asthma coming soon!");
});



// Select the toggle button and navigation links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Add a click event to toggle the visibility of navigation links
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
