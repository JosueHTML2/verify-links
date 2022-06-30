
const checkLink = require("./index.js"),
    checker = new checkLink.checkLink({
        link: "www.google.com",
        startsWith: "https://" // Default is http.
    });

checker.check().then(result => {
    console.log(result);
});