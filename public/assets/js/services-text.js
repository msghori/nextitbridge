    document.querySelectorAll('.heading-list li .nav-link').forEach((item) => {
      item.addEventListener('mouseover', function () {
        const image = this.getAttribute('data-image'); // Fetch the data-image value
        if (image) {
          document.getElementById('backgroundImage').style.backgroundImage = `url(${image})`;
          document.getElementById('backgroundImage').style.opacity = 1; // Make the background visible
        }
      });
    
      item.addEventListener('mouseout', function () {
        document.getElementById('backgroundImage').style.backgroundImage = 'none'; // Clear the background
        document.getElementById('backgroundImage').style.opacity = 0; // Hide the background
      });
    });
    