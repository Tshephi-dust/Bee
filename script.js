// Love Counter: Show how long you’ve been together
const startDate = new Date("2022-01-15"); // Date of your first date (update it accordingly)
const counterElement = document.getElementById("counter");

function updateLoveCounter() {
    const today = new Date();
    const timeDiff = today - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 3600 * 24));
    counterElement.textContent = `${daysTogether} days`;
}

updateLoveCounter();
setInterval(updateLoveCounter, 86400000); // Update every day
// Lightbox Effect for Gallery Images
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        const imgSrc = img.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${imgSrc}" class="lightbox-img"><span class="close">&times;</span>`;
        document.body.appendChild(lightbox);

        // Close the lightbox when clicked
        const closeButton = lightbox.querySelector('.close');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
