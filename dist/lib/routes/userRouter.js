"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var config_1 = __importDefault(require("../models/config"));
var app = express_1.default();
var userRouter = express_2.Router();
userRouter.get("/", function (req, res) {
    var url = 'https://graph.instagram.com/' + config_1.default.user_id + '/?access_token=' + config_1.default.token + '&fields=account_type,media_count,username';
    request_1.default({ url: url, json: true }, function (error, response) {
        if (error) {
            res.send("unable to connect to service");
        }
        else {
            res.status(200).send("USER " + response.body.username + " HAVE " + response.body.media_count + " POSTS");
        }
    });
});
exports.default = userRouter;
