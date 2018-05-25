function toggleScrollFab() {
  var scrollFab = document.querySelector('.scroll-fab');

  if (document.documentElement.scrollTop > 100) {
    var currentStyle = scrollFab.getAttribute('style') || "display: none;";
    scrollFab.setAttribute(
      "style",
      currentStyle.replace("display: none;", "display: inherit;")
    );
  } else {
    var currentStyle = scrollFab.getAttribute('style') || "";
    scrollFab.setAttribute(
      "style",
      currentStyle.replace("display: inherit;", "display: none;")
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  toggleScrollFab();
  document.addEventListener('scroll', toggleScrollFab);

  // Scroll to top button
  document.querySelector('.scroll-fab').addEventListener('click', function() {
    window.scrollTo(0, 0);
  });

  /* Pushpin */
  var elems = document.querySelectorAll('.pushpin');
  elems.forEach(function(elem) {
    var options = {
      top: elem.getAttribute('data-pushpin-top'),
      offset: elem.getAttribute('data-pushpin-offset')
    };
    M.Pushpin.init(elem, options);
  });
});