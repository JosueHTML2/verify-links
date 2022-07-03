const checkLink = require("./index.js"),
    checker = new checkLink.checkLink();
    
(async () => {
   await checker.check({
        link: "www.google.com",
        startsWith: "http://" // Default is http.
    }).then(result => {
        console.log(result);
    });
    
    await checker.check({
        link: "www.youtube.com",
        startsWith: "https://" // Default is http.
    }).then(result => {
        console.log(result);
    });
    
    console.log(checker.links);
})()
