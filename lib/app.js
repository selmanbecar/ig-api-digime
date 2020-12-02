"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var mediaRouter_1 = __importDefault(require("./routes/mediaRouter"));
var config_1 = __importDefault(require("./models/config"));
var app = express_1.default();
//envirements variable for port
var port = process.env.PORT || config_1.default.port;
app.use("/media", mediaRouter_1.default);
app.use("/", userRouter_1.default);
//Adding server to port
app.listen(3000, function () {
    console.log("server is listen on port " + config_1.default.port + "");
});
