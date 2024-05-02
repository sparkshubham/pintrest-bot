document.querySelector('#add_pin').addEventListener('click', () => {
    chrome.windows.getCurrent({ populate: true }, window => {
        const site_to_pin = window.tabs.filter(tab => tab.active);
        
       
        chrome.runtime.sendMessage({
            message: 'login',
            payload: {
                url: site_to_pin[0].url,
                destination_title: site_to_pin[0].title
            }
        });
    });
});





// Content script to interact with the Pinterest website

// x path  we need to imtegrate 

//
