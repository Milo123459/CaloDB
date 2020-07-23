"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const server_1 = __importDefault(require("./server/server"));
const exports_1 = __importDefault(require("./lib/exports"));
const defaultPort = 5375;
;
class Main {
    constructor(options) {
        if (!options || !options.password)
            throw new TypeError("You didn't set a password!");
        if (!options.port)
            options.port = defaultPort;
        if (typeof options.port === "string") {
            const parsed = parseInt(options.port);
            if (isNaN(parsed))
                throw new TypeError("Your port is not a valid number");
            else
                options.port = parsed;
        }
        else if (typeof options.port != "number")
            options.port = defaultPort;
        this.options = options;
        this.server = new server_1.default(this.options);
    }
    ;
    start() {
        exports_1.default.Diro("db");
        this.server.start();
    }
}
; //so it can be used as both? mk
module.exports = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2REFBcUM7QUFDckMsNERBQWdDO0FBQ2hDLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQztBQUloQyxDQUFDO0FBQ0YsTUFBTSxJQUFJO0lBR04sWUFBWSxPQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQUUsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDOUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xDLE1BQU0sTUFBTSxHQUFXLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQzs7Z0JBQ3JFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLElBQUksUUFBUTtZQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQUEsQ0FBQztJQUNLLEtBQUs7UUFDUixpQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBQUEsQ0FBQyxDQUFDLCtCQUErQjtBQUNsQyxpQkFBUyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VydmVyIGZyb20gXCIuL3NlcnZlci9zZXJ2ZXJcIjtcclxuaW1wb3J0IGxpYiBmcm9tIFwiLi9saWIvZXhwb3J0c1wiO1xyXG5jb25zdCBkZWZhdWx0UG9ydDogbnVtYmVyID0gNTM3NTtcclxuaW50ZXJmYWNlIE1haW5PcHRpb25zIHtcclxuICAgIHBvcnQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59O1xyXG5jbGFzcyBNYWluIHtcclxuICAgIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXI7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IE1haW5PcHRpb25zO1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogTWFpbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMucGFzc3dvcmQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgZGlkbid0IHNldCBhIHBhc3N3b3JkIVwiKTtcclxuICAgICAgICBpZiAoIW9wdGlvbnMucG9ydCkgb3B0aW9ucy5wb3J0ID0gZGVmYXVsdFBvcnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnBvcnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkOiBudW1iZXIgPSBwYXJzZUludChvcHRpb25zLnBvcnQpO1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VkKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdXIgcG9ydCBpcyBub3QgYSB2YWxpZCBudW1iZXJcIik7XHJcbiAgICAgICAgICAgIGVsc2Ugb3B0aW9ucy5wb3J0ID0gcGFyc2VkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMucG9ydCAhPSBcIm51bWJlclwiKSBvcHRpb25zLnBvcnQgPSBkZWZhdWx0UG9ydDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXIgPSBuZXcgU2VydmVyKHRoaXMub3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gICAgcHVibGljIHN0YXJ0KCl7XHJcbiAgICAgICAgbGliLkRpcm8oXCJkYlwiKTtcclxuICAgICAgICB0aGlzLnNlcnZlci5zdGFydCgpO1xyXG4gICAgfVxyXG59OyAvL3NvIGl0IGNhbiBiZSB1c2VkIGFzIGJvdGg/IG1rXHJcbmV4cG9ydCA9IE1haW47Il19