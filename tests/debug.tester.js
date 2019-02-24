const app = require("../index");
const { capitaliseFirst } = require("../helpers");

const chai = require("chai");
const chaiHttp = require("chai-http");

const options = ["views", "likes", "dislikes", "comments"];

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Debug", () => {
  describe(`Routes (array)`, () => {
    let path = `/debug/routes`;
    it(`GET /debug/routes`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.be.an("array");
          done();
        });
    });
  });

  describe(`Routes (formatted)`, () => {
    let path = `/debug/routes/formatted`;
    it(`GET /debug/routes/formatted`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "routes",
            color: "blue"
          });
          // Despite being a number, the endpoint badge requires it to be a string
          chai.expect(res.body.message).to.be.a("string");
          done();
        });
    });
  });
});
