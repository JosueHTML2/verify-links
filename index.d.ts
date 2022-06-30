declare type Options = {
    link: string;
    startsWith?: string;
};
declare type Result = {
    time: string;
    status: (number | string);
    exists: (boolean | string);
};

class checkLink {
    private link;
    private startsWith;
    constructor(options: Options);
    check(): Promise<Result>;
}

export  { checkLink };

//# sourceMappingURL=index.d.ts.map