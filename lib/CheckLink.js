var fetch = link => import('node-fetch').then(f => f.default(link));


class checkLink {
    #link; #startsWith;
    constructor(options) {
        this.#link = options.link;
        this.#startsWith = options.startsWith;
    }
    async check() {
        if (!this.#startsWith) {
            process.emitWarning("checkLink options#startsWith needs to be defined");
            this.#startsWith = "http://"
        }
        if (!this.#link.startsWith(this.#startsWith)) this.#link = this.#startsWith + this.#link;

        var time = new Date().getTime();
        var fetched = await fetch(this.#link).catch((a) => { });
        var time2 = new Date().getTime();
        var timeDiff = time2 - time;

        return {
            time: timeDiff + "ms",
            status: fetched?.status || "FAILED",
            exists: fetched?.ok || false
        };
    }
}

module.exports = checkLink;