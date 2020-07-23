import { Request, Response } from "express";
export = {
    route: `/set`,
    run: (req: Request, res: Response) => {
        console.log(req.headers)
    },
    method: `post`
};