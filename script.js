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
