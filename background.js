console.log("aa");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'popupLoaded') {
    // ポップアップがロードされたときの処理
    // ここにポップアップがロードされたときの追加の処理を追加できます
  }
});