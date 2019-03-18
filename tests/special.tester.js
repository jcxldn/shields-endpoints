const app = require("../index");

const chai = require("chai");
const chaiHttp = require("chai-http");

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Special", () => {
    describe(`Pewdiepie vs T-Series Subscriber Gap`, () => {
      let path = `/special/subgap`;
      it(`GET ${path}`, done => {
        chai
          .request(app)
          .get(path)
          .end((err, res) => {
            res.should.have.status(200);
            chai.expect(res.body).to.include({
              schemaVersion: 1,
              label: "sub gap",
              color: "red",
              namedLogo: "youtube"
            });
            chai.expect(res.body.message).to.be.a("string");
            done();
          });
      });
    });
});
