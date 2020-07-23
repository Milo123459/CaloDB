import Server from "./server/server";
import lib from "./lib/exports";
const defaultPort: number = 5375;
interface MainOptions {
    port?: number | string;
    password: string;
};
class Main {
    private server: Server;
    private options: MainOptions;
    constructor(options: MainOptions) {
        if (!options || !options.password) throw new TypeError("You didn't set a password!");
        if (!options.port) options.port = defaultPort;
        if (typeof options.port === "string") {
            const parsed: number = parseInt(options.port);
            if (isNaN(parsed)) throw new TypeError("Your port is not a valid number");
            else options.port = parsed;
        } else if (typeof options.port != "number") options.port = defaultPort;
        this.options = options
        this.server = new Server(this.options);
    };
    public start(){
        lib.Diro("db");
        this.server.start();
    }
}; //so it can be used as both? mk
export = Main;