/*function applyFocusMode(enabled) {
  const hideYouTubeElements = () => {
    const suggestions = document.getElementById("related");
    const comments = document.getElementById("comments");
    if (suggestions) suggestions.style.display = enabled ? "none" : "";
    if (comments) comments.style.display = enabled ? "none" : "";
  };

  // observer pour les changements dynamiques
  new MutationObserver(hideYouTubeElements).observe(document.body, {
    childList: true,
    subtree: true,
  });

  hideYouTubeElements();
}

// Écoute les messages venant du popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TOGGLE_FOCUS") {
    applyFocusMode(message.enabled);
  }
});

// Au chargement : récupérer l'état actuel
chrome.storage.sync.get("focusMode", (data) => {
  if (data.focusMode) {
    applyFocusMode(true);
  }
});
function applyFocusMode(enabled) {
  const hideYouTubeElements = () => {
    const suggestions = document.getElementById("related");
    const comments = document.getElementById("comments");
    if (suggestions) suggestions.style.display = enabled ? "none" : "";
    if (comments) comments.style.display = enabled ? "none" : "";
  };

  // observer pour les changements dynamiques
  new MutationObserver(hideYouTubeElements).observe(document.body, {
    childList: true,
    subtree: true,
  });

  hideYouTubeElements();
}

// Écoute les messages venant du popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "TOGGLE_FOCUS") {
    applyFocusMode(message.enabled);
  }
});

// Au chargement : récupérer l'état actuel
chrome.storage.sync.get("focusMode", (data) => {
  if (data.focusMode) {
    applyFocusMode(true);
  }
});
*/

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  let name = 'autre';  
  if (msg.action === "getDOM") {
    const url = location.href;
    if (url.includes('facebook')) {
      name = 'facebook';
    }
    else if (url.includes('instagram')) {
      name = 'instagram';
    }
    else if (url.includes('youtube')) {
      name = 'youtube';
    }
      sendResponse({ name });
  }
});

