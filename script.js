// Sidebar resize toggle functionality
const resizeBtn = document.querySelector("[data-resize-btn]");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const collapseText = resizeBtn.querySelector("span");
const collapseIcon = resizeBtn.querySelector("i");

resizeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("sb-expanded");

  // Toggle sidebar width and main content margin
  if (document.body.classList.contains("sb-expanded")) {
    sidebar.style.width = "220px"; // Expanded sidebar width
    mainContent.style.marginLeft = "220px"; // Adjust the main content margin
    collapseText.textContent = "Collapse"; // Update text to Collapse
    collapseIcon.classList.remove("fa-chevron-right");
    collapseIcon.classList.add("fa-chevron-left"); // Flip the arrow
  } else {
    sidebar.style.width = "100px"; // Collapsed sidebar width
    mainContent.style.marginLeft = "60px"; // Adjust the main content margin when collapsed
    collapseText.textContent = "Expand"; // Update text to Expand
    collapseIcon.classList.remove("fa-chevron-left");
    collapseIcon.classList.add("fa-chevron-right"); // Flip the arrow back
  }
});
