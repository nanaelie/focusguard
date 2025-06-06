chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.from === "popup" && msg.action === "fetchDOM") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getDOM" }, sendResponse);
    });
    return true;
  }
});

