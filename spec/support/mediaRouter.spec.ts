
import request from "request"

const path = 'http://localhost:3000/media';
describe('mediaRouter', function () {
    it('should return 200 response code', function (done) {
        request.get(path, function (error: any, res: any) {
            expect(res.statusCode).toEqual(200);
            done();
        });
    });

    it('should fail on POST', function (done) {
        request.post(path, {json: true, body: {}}, function (error: any, res: any) {
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
})