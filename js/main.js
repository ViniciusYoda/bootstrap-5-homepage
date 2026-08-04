jQuery(document).ready(function ($) {
  //FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };

  //ISOTOPE
  let btns = $("#portfolio .button-group button");

  btns.click(function (e) {
    $("#portfolio .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#portfolio .grid").isotope({
      filter: selector,
    });
  });

  $(window).on("load", function () {
    $("#portfolio .grid").isotope({
      filter: "*",
    });
  });
  // LIGHTBOX
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true, tPrev: "Anterior", tNext: "Próxima", tCounter: "%curr% de %total%" },
  });

  // NAVEGAÇÃO
  $("#header .nav-link").on("click", function () {
    $("#navbarNav").collapse("hide");
    $("#header .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // NEWSLETTER (demonstração local)
  $("#newsletter-form").on("submit", function (event) {
    event.preventDefault();
    const $button = $(this).find("button[type=submit]");
    $button.text("E-mail cadastrado!").prop("disabled", true);
  });

  // CARROSSEL
  $(".owl-carousel").owlCarousel({
    loop: false, margin: 30, autoplay: true, autoplayTimeout: 6000, dots: true, lazyLoad: true, nav: false,
    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } },
  });
});
