"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var express_1 = __importDefault(require("express"));
var express_2 = require("express");
var Post_1 = require("../models/Post");
var config_1 = __importDefault(require("../models/config"));
var app = express_1.default();
var mediaRouter = express_2.Router();
mediaRouter.get("/", function (req, res) {
    var url = 'https://graph.instagram.com/' + config_1.default.user_id + '/media?fields=id,media_url,timestamp&access_token=' + config_1.default.token + '';
    request_1.default({ url: url, json: true }, function (error, response) {
        if (error) {
            res.send("unable to connect to service");
        }
        else {
            var array = response.body.data;
            var Posts = [];
            array.forEach(function (obj) {
                Posts.push(new Post_1.Post(obj.media_url, obj.timestamp));
            });
            res.send(Posts);
        }
    });
});
exports.default = mediaRouter;
