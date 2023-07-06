// Scroll to section
function scrollToSection(sectionId, offset) {
  const section = document.getElementById(sectionId);
  const offsetAmount = offset || 150;
  const options = {
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  };
  window.scrollTo({
    top: section.offsetTop - offsetAmount,
    ...options,
  });
}
//Smoth page transition
function smoothPageTransition(url) {
  document.body.classList.add("page-transition");

  setTimeout(function () {
    window.location.href = url;
  }, 300);
}
if (window.location.pathname.includes("gallery.html")) {
  document.querySelector(".header__title").onclick = function (event) {
    event.preventDefault();
    smoothPageTransition("index.html");
  };
} else if (window.location.pathname.includes("index.html")) {
  document.querySelector(".header__title").onclick = function () {
    scrollToSection("welcome");
  };
}

//Fullscreen on click

function showFullScreen(ImgLink) {
  document.querySelector(".FullImage").src = ImgLink;
  document.querySelector(".Fullscreen").style.display = "flex";
}
function closeFullScreen() {
  document.querySelector(".Fullscreen").style.display = "none";
}
//lazy loading
const lazyImages = document.querySelectorAll(".lazy");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("loading");
      img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => {
  observer.observe(img);
});
