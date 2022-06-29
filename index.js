function checkLink(options) {
    return new (require("./lib/CheckLink"))(options);
}

checkLink.CheckLink = require("./lib/CheckLink");
module.exports = checkLink;