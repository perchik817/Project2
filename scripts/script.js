window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0 && !header.classList.contains('scrolled')) {
    header.classList.add('scrolled');
  }
});

let links = document.querySelectorAll(".menu-list-item > a");
  for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}

document.getElementById("chevron-down").addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

let teamSwiper = new Swiper(".team-cards-container", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let porfolioSwiper = new Swiper(".portfolio-items-container", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buttons = document.querySelectorAll(".type");
const galleryItems = document.querySelectorAll(".img-wrapper");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const category = this.id;

        galleryItems.forEach(item => {
          item.style.display = "none";

            if (category === "all" || item.classList.contains(category)) {
                setTimeout(() => {
                    item.style.display = "block";
                    item.style.height = "auto";
                    item.style.animation = "fade 0.8s";
                }); 
            }
        });

        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

const windowOpenButtons = document.querySelectorAll(".img-wrapper-btn");
const windowCloseButton = document.querySelector(".window-btn");
const overlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".window");

windowOpenButtons.forEach(windowCloseButton => {
    windowCloseButton.addEventListener("click", function(){
        modalWindow.classList.add("open");
        overlay.classList.add("open");
        document.body.classList.add("open");
    });
});

windowCloseButton.addEventListener("click", function() {
    modalWindow.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("open");
});

let testimonialsSwiper = new Swiper(".testimonials-container", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});