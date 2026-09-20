document.getElementById('year').textContent = new Date().getFullYear();

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var revealEls = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(function (el) { observer.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('in-view');
  });
}
