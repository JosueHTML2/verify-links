declare function checkLink(options: checkLink.Options): checkLink.Link;

declare namespace checkLink {
    export type Options = {
        link: string;
        startsWith?: string;
    }
    export type checkReturned = {
        time: string;
        status: (number | string);
        exists: (boolean | string);
    }
    export class Link {
        constructor(options: Options);
        private #link;
        private #startsWith;

        /**
         * @returns {checkReturned}
         */
        public check(): checkReturned;
    }
}

export = checkLink;