$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#go").fadeIn();
    } else {
      $("#go").fadeOut();
    }
  });
  $("#go").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  $("#reload").click(function () {
    location.reload(true);
  });
});
