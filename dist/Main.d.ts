interface MainOptions {
    port?: number | string;
    password: string;
}
declare class Main {
    private server;
    private options;
    constructor(options: MainOptions);
    start(): void;
}
export = Main;
