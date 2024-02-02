var toTopBtn = document.getElementById("gotoup");
function scroll() {
  if (window.pageYOffset > 160) {
    toTopBtn.style.bottom = "40px";
    toTopBtn.style.opacity = 100;
    toTopBtn.classList.remove("d-none");
    alert("randaaaaaaa");
  } else {
    toTopBtn.style.bottom = "-50px";
    toTopBtn.style.opacity = 0;
    toTopBtn.classList.add("d-none");
    alert("randaaaaaaabbb");
  }
}
scroll();
