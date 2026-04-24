// Vercel Web Analytics initialization
// This script initializes Vercel Web Analytics for the static HTML site
(function() {
  // Initialize the queue if it doesn't exist
  if (!window.va) {
    window.va = function va() {
      (window.vaq = window.vaq || []).push(arguments);
    };
  }

  // Load the Vercel Analytics script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  document.head.appendChild(script);
})();
