// --- 1. SELECTION ---
const navReports = document.getElementById("nav-reports");
const navUsers = document.getElementById("nav-users");
const reportsView = document.getElementById("reports-view");
const usersView = document.getElementById("users-view");

const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menu-toggle");

const actionsToggle = document.getElementById("actions-toggle");
const headerActions = document.getElementById("header-actions");

// --- 2. NAVIGATION LOGIC ---
function showSection(sectionToShow) {
  // Switch views
  reportsView.style.display = sectionToShow === "reports" ? "block" : "none";
  usersView.style.display = sectionToShow === "users" ? "block" : "none";

  navReports.classList.toggle("active", sectionToShow === "reports");
  navUsers.classList.toggle("active", sectionToShow === "users");

  sidebar.classList.remove("active");
}

navReports.addEventListener("click", () => showSection("reports"));
navUsers.addEventListener("click", () => showSection("users"));

// --- 3. TOGGLE LOGIC ---

// Toggle Sidebar (Left)
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.toggle("active");
  headerActions.classList.remove("active");
});

// Toggle Action Buttons (Right)
actionsToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  headerActions.classList.toggle("active");
  sidebar.classList.remove("active");
});

// --- 4. THE "CLICK OUTSIDE" FIX ---
document.addEventListener("click", (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnMenuBtn = menuToggle.contains(event.target);

  // If click is not in sidebar AND not on the toggle button, close sidebar
  if (!isClickInsideSidebar && !isClickOnMenuBtn) {
    sidebar.classList.remove("active");
  }

  // Right side actions logic
  if (headerActions) {
    const isClickInsideActions = headerActions.contains(event.target);
    const isClickOnActionsBtn = actionsToggle.contains(event.target);

    if (!isClickInsideActions && !isClickOnActionsBtn) {
      headerActions.classList.remove("active");
    }
  }
});
