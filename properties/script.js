const navEl = document.getElementById("nav-mobile-menu");
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", (event) => {
    const toggleButton = document.getElementById("theme-toggle");
  
    // Function to set theme
    const setTheme = (theme) => {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      toggleButton.checked = true;
      updateScrollbarColor("dark-mode"); // Update scrollbar color to dark mode
    };
  
    // Load user's theme preference from localStorage (but ignore it)
    const currentTheme = localStorage.getItem("theme");
    setTheme("dark-mode"); // Always set to dark mode
  
    // Listen for changes in the theme toggle button (but ignore user input)
    toggleButton.addEventListener("change", () => {
      setTheme("dark-mode"); // Always set to dark mode
      localStorage.setItem("theme", "dark-mode"); // Save dark mode to localStorage
    });
  
    // Listen for changes in system theme preference (but ignore it)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      setTheme("dark-mode"); // Always set to dark mode
    });
  
    // Function to update scrollbar color based on theme
    const updateScrollbarColor = (theme) => {
      const scrollbarThumbColor = "#333"; // Always use dark mode scrollbar color
      document.documentElement.style.setProperty("--scrollbar-thumb-color", scrollbarThumbColor);
    };
  });
  const buttons = document.querySelectorAll(".button");
  const search = document.querySelector(".search__input");
  const grid = document.querySelector(".grid");
  const gridItems = Array.from(grid.querySelectorAll(".card"));
  
  function showAllCards() {
    gridItems.forEach((item) => {
      item.classList.remove("--inactive");
      item.classList.add("slide-up");
    });
  }
  
  // Initialize the page to show all cards by default
  showAllCards();
  
  // Set the "all" button as active by default
  document.querySelector(".button[data-filter='all']").classList.add("--active");
  
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((item) => {
        item.classList.remove("--active");
      });
      button.classList.add("--active");
  
      const location = button.textContent.toLowerCase();
      const filteredItems = gridItems.filter(
        (item) =>
          item.querySelector(".card__location").textContent.toLowerCase() ===
          location
      );
  
      if (location === "all") {
        showAllCards();
        return;
      }
  
      gridItems.forEach((item) => {
        item.classList.add("--inactive");
        item.classList.remove("slide-up");
      });
      filteredItems.forEach((item) => {
        item.classList.remove("--inactive");
        // Trigger reflow to restart the animation
        void item.offsetWidth;
        item.classList.add("slide-up");
      });
    });
  });
  
  search.addEventListener("input", function () {
    const searchText = search.value.toLowerCase();
    gridItems.forEach((item) => {
      const city = item.querySelector(".card__title").textContent.toLowerCase();
      if (!city.includes(searchText)) {
        item.classList.add("--inactive");
        item.classList.remove("slide-up");
      } else {
        item.classList.remove("--inactive");
        // Trigger reflow to restart the animation
        void item.offsetWidth;
        item.classList.add("slide-up");
      }
    });
  });
  
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

  document.getElementById("home").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("Magenta").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "Magenta/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("homenav1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("homenav2").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("signin1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../sign-in/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("signin2").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../sign-in/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("signup1").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../sign-up/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("signup2").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../sign-up/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

