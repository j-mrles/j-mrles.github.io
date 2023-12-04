document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });

        item.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });
    });

    // Get the "Get Estimate" button element
    const estimateButton = document.querySelector('button');

    // Add a click event listener to the button
    estimateButton.addEventListener('click', function () {
        // Call the function to calculate landscaping estimate
        calculateLandscapingEstimate();

        // Play the money sound
        playMoneySound();
    });
});

// Function to calculate landscaping estimate
function calculateLandscapingEstimate() {
    const area = parseFloat(document.getElementById('area').value);
    const plants = parseInt(document.getElementById('plants').value);
    const services = document.getElementById('services').selectedOptions;

    const baseCost = 50;
    const areaCost = area * 0.1;
    const plantsCost = plants * 5;
    const servicesCost = services.length * 20;

    const totalCost = baseCost + areaCost + plantsCost + servicesCost;

    document.getElementById('landscaping-estimate-result').innerHTML = `Estimated Cost: $${totalCost.toFixed(2)}`;
}

// Function to play the money sound
function playMoneySound() {
    // You can replace 'money.mp3' with the actual path to your money sound file
    const moneySound = new Audio('../estimate/money.mp3');

    // Play the money sound
    moneySound.play();
}
