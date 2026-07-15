// Terry Lab — minimal site JS
// Handles: mobile nav toggle, active nav link highlighting

(function () {
  'use strict';

  // --- Mobile navigation toggle ---
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close nav when a link is clicked (mobile UX)
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Highlight active nav link ---
  // Jekyll sets class="active" server-side, but this adds a fallback
  // for cases where the URL path matches exactly.
  var navItems = document.querySelectorAll('.nav-links a');
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  navItems.forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === currentPath) {
      a.classList.add('active');
    }
  });
}());
