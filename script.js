function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function initCarousel() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel img");
  const carousel = document.querySelector(".carousel");
  if (!carousel || slides.length === 0) return;

  function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => moveSlide(-1));
    nextBtn.addEventListener("click", () => moveSlide(1));
  }
}

function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const yearElem = document.getElementById("copyright-year");
  if (yearElem) {
    yearElem.innerHTML = `Copyright &#169; ${new Date().getFullYear()} Kairo Kõrgend. All rights Reserved.`;
  }
});
