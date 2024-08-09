const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});

document.getElementById('contact-us').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('popup-menu').style.display = 'flex';
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('popup-menu').style.display = 'none';
  });
  
  // Close the popup if the user clicks outside of the popup content
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup-menu')) {
      document.getElementById('popup-menu').style.display = 'none';
    }
  });

  function addRevealEffect(elements, animationClass, customClass = null) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (customClass) {
              entry.target.classList.add(customClass);
            }
            entry.target.classList.add(animationClass, "revealed");
          } else {
            if (customClass) {
              entry.target.className = customClass; // Restore original class if provided
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  
  // Apply separate animations
  const sectionElements = document.querySelectorAll(".section-2-1-main");
  addRevealEffect(sectionElements, "reveal-down", "section-2-1-main");
  
  const testimonialContainers = document.querySelectorAll(".cardtesti");
  addRevealEffect(testimonialContainers, "reveal-left");
  
  const titlecontainer = document.querySelectorAll(".tcard");
  addRevealEffect(titlecontainer, "reveal-right");

  const sectionElements1 = document.querySelectorAll(".up");
  addRevealEffect(sectionElements1, "reveal-down1", "up");


  // Function to show progress bar for 1 second
  function showProgressBar(callback) {
    // Show progress bar
    document.getElementById("progress-bar").style.display = "block";
  
    // Hide progress bar after 1 second
    setTimeout(function () {
      document.getElementById("progress-bar").style.display = "none";
      if (callback) {
        callback(); // Execute callback function
      }
    }, 1000);
  }
  
  // Show progress bar when page loads
  window.addEventListener("load", function () {
    showProgressBar();
  });

  document.getElementById("visitprop").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "properties/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("propnav").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "properties/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("propnav1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "properties/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("dreamhome").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "properties/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });



  document.getElementById("sign-in").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "sign-in/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("sign-up").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "sign-up/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("sign-in1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "sign-in/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("sign-up1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "sign-up/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("homelogo").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });