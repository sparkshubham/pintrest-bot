chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'login') {
        // Open a new tab to Pinterest
        chrome.tabs.create({ url: 'https://in.pinterest.com/' }, (tab) => {
            // Wait for the tab to be loaded
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    // Send a message to the content script to fill the login form
                    chrome.tabs.sendMessage(tab.id, {
                        action: 'fillLoginForm',
                        payload: {
                            username: "sonyshubhamm@gmail.com",
                            password: "Secret123#"
                        }
                    });
                    // Clean up the listener
                    chrome.tabs.onUpdated.removeListener(listener);
                }
            });
        });
    }
    if (request.message === 'create_pin') {
        // Open a new tab to Pinterest
        alert('sss');
        chrome.tabs.create({ url: 'https://in.pinterest.com/' }, (tab) => {
            // Wait for the tab to be loaded
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (tabId === tab.id && changeInfo.status === 'complete') {
                    // Send a message to the content script to fill the login form
                    chrome.tabs.sendMessage(tab.id, {
                        action: 'create_pin',
                    });
                    // Clean up the listener
                    chrome.tabs.onUpdated.removeListener(listener);
                }
            });
        });
    }

    

});
