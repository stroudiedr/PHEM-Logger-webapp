// Light/dark toggle. The <head> of each page sets data-theme before paint;
// this wires up the button and keeps the choice across pages and visits.
(function(){
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function current(){
    return root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }
  function sync(){
    var t = current();
    root.setAttribute('data-theme', t);
    var next = t === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    btn.setAttribute('title', 'Switch to ' + next + ' mode');
  }

  btn.addEventListener('click', function(){
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('phem-logger-theme', next); } catch (e) {}
    sync();
  });

  sync();
})();
