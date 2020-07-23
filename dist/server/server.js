"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Handler_1 = __importDefault(require("./api/Handler"));
const path_1 = require("path");
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default.json());
class Server {
    constructor(options) {
        this.options = options;
    }
    start() {
        Handler_1.default().map((r) => {
            let Route = require(`${path_1.join(__dirname, `api`, `routes`, r)}`); //it worked
            app[Route.method.toLowerCase()](Route.route, Route.run);
        });
        app.listen(this.options.port, () => console.log("Listening on port " + this.options.port));
    }
}
;
module.exports = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHNEQUE4QjtBQUM5Qiw0REFBb0M7QUFDcEMsK0JBQTRCO0FBQzVCLDhEQUFxQztBQUVyQyxNQUFNLEdBQUcsR0FBd0IsaUJBQU8sRUFBRSxDQUFDO0FBQzNDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBSzNCLE1BQU0sTUFBTTtJQUVSLFlBQVksT0FBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUNNLEtBQUs7UUFDUixpQkFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsV0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLFdBQVc7WUFDekUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUNKO0FBQUEsQ0FBQztBQUNGLGlCQUFTLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBIYW5kbGVyIGZyb20gXCIuL2FwaS9IYW5kbGVyXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL01haW5cIjtcclxuY29uc3QgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTsgXHJcbmludGVyZmFjZSBNYWluT3B0aW9ucyB7XHJcbiAgICBwb3J0PzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5jbGFzcyBTZXJ2ZXIge1xyXG4gICAgcHVibGljIG9wdGlvbnM6IE1haW5PcHRpb25zXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNYWluT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGFydCgpIHtcclxuICAgICAgICBIYW5kbGVyKCkubWFwKChyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IFJvdXRlID0gcmVxdWlyZShgJHtqb2luKF9fZGlybmFtZSwgYGFwaWAsIGByb3V0ZXNgLCByKX1gKTsvL2l0IHdvcmtlZFxyXG4gICAgICAgICAgICBhcHBbUm91dGUubWV0aG9kLnRvTG93ZXJDYXNlKCldKFJvdXRlLnJvdXRlLCBSb3V0ZS5ydW4pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXBwLmxpc3Rlbih0aGlzLm9wdGlvbnMucG9ydCwgKCkgPT4gY29uc29sZS5sb2coXCJMaXN0ZW5pbmcgb24gcG9ydCBcIiArIHRoaXMub3B0aW9ucy5wb3J0KSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCA9IFNlcnZlcjsiXX0=