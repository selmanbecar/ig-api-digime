"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var path = 'http://localhost:3000/media';
describe('mediaRouter', function () {
    it('should return 200 response code', function (done) {
        request_1.default.get(path, function (error, res) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    it('should fail on POST', function (done) {
        request_1.default.post(path, { json: true, body: {} }, function (error, res) {
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
});
