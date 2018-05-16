const $goTopButton = document.querySelector(".go-top");
function goTop() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    startAnimation(goTop);
    stopAnimation(startAnimation(goTop));    
    window.scrollTo(0, currentScroll - currentScroll / 500);
  }
}

function startAnimation(param) {
  window.requestAnimationFrame(param);
}

function stopAnimation(animation) {
  window.cancelAnimationFrame(animation);
}

function setup() {
  $goTopButton.addEventListener("click", goTop);
}

setup();
