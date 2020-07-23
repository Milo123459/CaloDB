import { writeFileSync } from "fs";
export = async function (path: string, data: object): Promise<void | any> {
    try {
        await writeFileSync(path, JSON.stringify(data))
    } catch (e) {
        return e;
    }
};