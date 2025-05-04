// Toggle the sidebar menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebarMenu');
  sidebar.classList.toggle('active');
}

// Toggle dropdown menus
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle('show');
}
