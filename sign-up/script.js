const eyeClick = document.querySelector("[data-password]");
const password_elem = document.getElementById("password");

eyeClick.onclick = () => {
  const icon = eyeClick.children[0];
  icon.classList.toggle("fa-eye-slash");
  if (password_elem.type === "password") {
    password_elem.type = "text";
  } else if (password_elem.type === "text") {
    password_elem.type = "password";
  }
};

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

  document.getElementById("sign-in").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../sign-in/index.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });

  document.getElementById("create").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    showProgressBar(function () {
      window.location.href = "../Under-development/dev.html"; // Redirect after progress bar animation completes
    }); // Show progress bar when link is clicked
  });