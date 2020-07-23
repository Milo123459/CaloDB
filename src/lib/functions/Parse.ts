import { readFileSync } from "fs";
export = (src: any) => {
    let res: any;
    if (typeof src == "object") res = src;
    else try {
        JSON.parse(src);
        res = JSON.parse(src);
    } catch (e) {
        try {
            res = JSON.parse(JSON.stringify(res));
        } catch (e) {
            res = false;
       }
    }
    return res
};