/// <reference types="qs" />
import Express from "express";
declare const _default: {
    route: string;
    run: (req: Express.Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Express.Response<any>) => void;
    method: string;
};
export = _default;
