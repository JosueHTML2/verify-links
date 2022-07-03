declare type Options = {
    link: string;
    startsWith?: string;
};
declare type Result = {
    time: string;
    status: (number | string);
    exists: (boolean | string);
    url: string;

};

declare class checkLink {
    private link;
    private startsWith;
    constructor();
    check(options: Options): Promise<Result>;
}

export { checkLink };

//# sourceMappingURL=index.d.ts.map