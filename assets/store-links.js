// ============================================================
//  STORE LINKS — the only place store URLs need to be edited.
//  When the Android app is live, paste its Google Play URL below,
//  e.g. "https://play.google.com/store/apps/details?id=com.example.phemlogger"
//  Every "Google Play" button on the site then switches from
//  "Coming soon" to a live download link automatically.
// ============================================================
var GOOGLE_PLAY_URL = "";

(function(){
  if (!GOOGLE_PLAY_URL) return;
  var btns = document.querySelectorAll('[data-store="google-play"]');
  for (var i = 0; i < btns.length; i++){
    var b = btns[i];
    b.setAttribute('href', GOOGLE_PLAY_URL);
    b.setAttribute('target', '_blank');
    b.setAttribute('rel', 'noopener');
    b.removeAttribute('aria-disabled');
    b.classList.remove('btn-soon');
    var label = b.querySelector('.store-label');
    if (label) label.textContent = 'Get it on Google Play';
    var badge = b.querySelector('.soon');
    if (badge) badge.parentNode.removeChild(badge);
  }
  var soon = document.querySelectorAll('[data-android-status]');
  for (var j = 0; j < soon.length; j++) soon[j].textContent = soon[j].getAttribute('data-android-status');
})();
