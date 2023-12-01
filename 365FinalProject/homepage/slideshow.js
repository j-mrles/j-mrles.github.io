document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll("#main-image img");

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Set an interval to change images every 3 seconds (adjust as needed)
    setInterval(nextImage, 3000);

    // Show the first image initially
    showImage(currentImageIndex);
});
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
});

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

// Add this to a new JavaScript file (e.g., script.js) and link it in your HTML

document.addEventListener('DOMContentLoaded', function () {
    animateTable();
  });
  
  function animateTable() {
    const tableRows = document.querySelectorAll('.comparison table tbody tr');
  
    tableRows.forEach((row, index) => {
      row.classList.add('fadeIn');
      row.style.animationDelay = `${index * 0.2}s`;
    });
  }
  