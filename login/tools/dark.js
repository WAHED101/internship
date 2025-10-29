const toggleBtn = document.getElementById("toggleMode");
let darkMode = false;

toggleBtn.addEventListener("click", function () {
  if (!darkMode) {
    // Dark Mode colors
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--btn-bg", "#f39c12");
    document.documentElement.style.setProperty("--btn-text", "black");

    toggleBtn.innerText = "☀️ Light Mode";
    darkMode = true;
  } else {
    // Light Mode colors
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--btn-bg", "#007bff");
    document.documentElement.style.setProperty("--btn-text", "white");

    toggleBtn.innerText = "🌙 Dark Mode";
    darkMode = false;
  }
});
