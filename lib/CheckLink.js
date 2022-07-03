var fetch = link => import('node-fetch').then(f => f.default(link));

class checkLink {

    constructor() {
        this.#link = "";
        this.#startsWith = "";
        this.links = new Array();
    }
    async check(options) {
        this.#link = options.link;
        this.#startsWith = options.startsWith;
        if (!this.#startsWith) {
            process.emitWarning("checkLink#options#startsWith needs to be defined");
            this.#startsWith = "https://"
        }
        if (!this.#link.startsWith(this.#startsWith)) this.#link = this.#startsWith + this.#link;

        var time = new Date().getTime();
        var fetched = await fetch(this.#link).catch((a) => { });
        var time2 = new Date().getTime();
        var timeDiff = time2 - time;

        this.links.push({
            exists: fetched?.ok ?? false,
            url: fetched?.url ?? this.#link
        });
        return {
            time: timeDiff + "ms",
            status: fetched?.status ?? "FAILED",
            exists: fetched?.ok ?? false,
            url: fetched?.url ?? this.#link
        };
    }

    #link; #startsWith;
}

module.exports = checkLink;