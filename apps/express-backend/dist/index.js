"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const common_1 = require("common");
app.post("/", (req, res) => {
    const user = common_1.UserInput.safeParse(req.body);
});
app.listen(3014, () => {
    console.log("app listening");
});
