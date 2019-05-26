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
    it(`GET ${path}`, done => {
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
    it(`GET ${path}`, done => {
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

  describe(`User-Agent`, () => {
    let path = `/debug/useragent`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .set("User-Agent", "Chai Testing")
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({ "User-Agent": "Chai Testing" });
          done();
        });
    });
  });

  describe(`User-Agent (formatted)`, () => {
    let path = `/debug/useragent/formatted`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .set("User-Agent", "Chai Testing")
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "user agent",
            color: "blue",
            message: "Chai Testing"
          });
          done();
        });
    });
  });

  describe(`DateTime`, () => {
    let path = `/debug/datetime`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe(`DateTime (formatted)`, () => {
    let path = `/debug/datetime/formatted`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body.message).to.be.a("string");
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "date & time",
            color: "blue"
          });
          done();
        });
    });
  });
});
