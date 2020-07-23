import { readFileSync } from "fs";
import Parser from "./Parse";
export = (path: string) => {
    return Parser(readFileSync(path).toString());
}