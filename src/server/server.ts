import express from "express";
import Handler from "./api/Handler";
import { join } from "path";
const app: express.Application = express();
app.use(express.json()); 
interface MainOptions {
    port?: number | string;
    password: string;
}
class Server {
    public options: MainOptions
    constructor(options: MainOptions) {
        this.options = options
    }
    public start() {
        Handler().map((r: string) => {
            let Route = require(`${join(__dirname, `api`, `routes`, r)}`);//it worked
            app[Route.method.toLowerCase()](Route.route, Route.run);
        })
        app.listen(this.options.port, () => console.log("Listening on port " + this.options.port));
    }
};
export = Server;