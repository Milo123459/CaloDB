import { readdirSync } from "fs";
import { join } from "path";
export = () => {
    return readdirSync(join(__dirname, `routes`));
}