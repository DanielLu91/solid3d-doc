document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".md-nav__link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || !href.includes("api_reference")) {
      return;
    }

    link.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        var apiUrl = link.href.replace(
          /api_reference(\/index\.html)?\/?$/,
          "html/index.html"
        );
        window.open(apiUrl, "_blank", "noopener,noreferrer");
      },
      true
    );
  });
});
