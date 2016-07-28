function stripPrefixUrls(details) {
    return {redirectUrl: details.url.substring(details.url.lastIndexOf("http"))};
};

chrome.webRequest.onBeforeRequest.addListener(stripPrefixUrls,
                                              {"urls": ["*://*/*http*:*"],
                                               "types": ["main_frame"]},
                                              ["blocking"]);
