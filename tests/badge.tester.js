const app = require("../index");

const chai = require("chai");
const chaiHttp = require("chai-http");

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Badge", () => {
  describe(`Badge Redirect`, () => {
    let path = `/badge/debug/useragent/formatted`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.type).to.equal("image/svg+xml");
          done();
        });
    });
  });
});
