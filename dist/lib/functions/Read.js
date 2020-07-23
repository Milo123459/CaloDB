"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = require("fs");
const Parse_1 = __importDefault(require("./Parse"));
module.exports = (path) => {
    return Parse_1.default(fs_1.readFileSync(path).toString());
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZnVuY3Rpb25zL1JlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJCQUFrQztBQUNsQyxvREFBNkI7QUFDN0IsaUJBQVMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN0QixPQUFPLGVBQU0sQ0FBQyxpQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcbmltcG9ydCBQYXJzZXIgZnJvbSBcIi4vUGFyc2VcIjtcclxuZXhwb3J0ID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIFBhcnNlcihyZWFkRmlsZVN5bmMocGF0aCkudG9TdHJpbmcoKSk7XHJcbn0iXX0=