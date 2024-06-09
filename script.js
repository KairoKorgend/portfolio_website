function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById(
  "copyright-year"
).innerHTML = `Copyright &#169; ${new Date().getFullYear()} Kairo Kõrgend. All rights Reserved.`;
