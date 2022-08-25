let timer = null;
let to = 0;
let le = 0;
function play() {
  let incx = 5;
  let incy = 6;
  let b = document.getElementById("ball");
  let m = document.getElementById("myBall");
  timer = setInterval(function () {
    if (to < 0 || to + b.offsetHeight >= m.offsetHeight) incy = -incy;
    if (le < 0 || le + b.offsetWidth >= m.offsetWidth) incx = -incx;

    to += incy;
    le += incx;

    b.style.left = le + "px";
    b.style.top = to + "px";
  }, 10);
}

function stop() {
  if (timer != null) clearInterval(timer);
}
