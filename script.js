// Get the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateButtonText(currentTheme); // Update button text on load
}

// Function to update button text based on theme
function updateButtonText(theme) {
  if (theme === "dark") {
    themeToggleButton.textContent = "🌙 Theme"; // Change text for dark theme
  } else {
    themeToggleButton.textContent = "☀️ Theme"; // Change text for light theme
  }
}

// Event listener for the theme toggle button
themeToggleButton.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");

  // Toggle between light and dark themes
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // Save the theme in local storage
    updateButtonText("light"); // Update button text
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // Save the theme in local storage
    updateButtonText("dark"); // Update button text
  }
});

// Initialize feather icons
feather.replace();
