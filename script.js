// Дверной момент: створка закрыта. Наведение (или касание) открывает её.
(function () {
  var scene = document.querySelector(".door-scene");

  // Сенсорные экраны и мышь без hover: клик по полотну открывает/закрывает.
  scene.addEventListener("click", function (e) {
    if (e.target.closest("a")) return; // ссылку не трогаем
    scene.classList.toggle("is-open");
  });

  // Технический якорь для проверки открытого состояния (#door-open)
  if (window.location.hash === "#door-open") {
    scene.classList.add("is-open");
  }

  // Шапка обретает фон после прокрутки
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
