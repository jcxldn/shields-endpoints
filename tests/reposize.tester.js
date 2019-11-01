const app = require("../index");

const chai = require("chai");
const chaiHttp = require("chai-http");

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Repo Size", () => {
  describe(`Owner/Repo (prouser123/shields-endpoints)`, () => {
    let path = `/reposize/prouser123/shields-endpoints`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .timeout(10000)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "repo size",
            color: "blue"
          });
          chai.expect(res.body.message).to.be.a("string");
          done();
        });
    });
  });
});
