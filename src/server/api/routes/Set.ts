import Express from "express";
export = {
    route: `/set`,
    run: (req: Express.Request, res: Express.Response) => {
        console.log(req.headers)
    },
    method: `post`
};