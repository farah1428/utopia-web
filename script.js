function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.nextElementSibling;
  dropdown.classList.toggle('show');
}
