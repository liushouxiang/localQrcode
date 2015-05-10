chrome.tabs.onUpdated.addListener(checkLocalDomain);

function checkLocalDomain(tabID, changeInfo, tab) {
    var urlReg = /.*\:\/\/([^\/\:]*).*/;
    var match = tab.url.match(urlReg);
    if (match != null) {
        var host = match[1];
        if (host === '127.0.0.1' || host === 'localhost') {
            chrome.pageAction.show(tabID);
        }
    }
}