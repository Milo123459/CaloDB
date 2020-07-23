interface MainOptions {
    port?: number | string;
    password: string;
}
declare class Server {
    options: MainOptions;
    constructor(options: MainOptions);
    start(): void;
}
export = Server;
