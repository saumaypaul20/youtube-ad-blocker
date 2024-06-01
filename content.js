// Mutation observer to monitor ad container
const adObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.tagName === 'DIV' && node.querySelector('.ad-showing, .ytp-ad-module')) {
          const adContainer = document.querySelector('.ad-showing, .ytp-ad-module');
          if (adContainer) {
            adContainer.style.display = 'none';
          }
        }
      });
    }
  });
});

// Start observing the body for changes
adObserver.observe(document.body, { childList: true, subtree: true });

// Hide ad containers if they exist at the beginning
const adContainers = document.querySelectorAll('.ad-showing, .ytp-ad-module');
adContainers.forEach(container => {
  container.style.display = 'none';
});
