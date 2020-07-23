import { mkdirSync } from "fs";
export = (path: string) => {
    try  {
        mkdirSync(path);
    } catch {};
}