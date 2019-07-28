const app = require("../index");
const { capitaliseFirst } = require("../helpers");

const chai = require("chai");
const chaiHttp = require("chai-http");

const options = ["followers", "following", "likes", "tweets"];

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Twitter", () => {
  options.forEach(function(option) {
    describe(`${capitaliseFirst(option)} - @noradio`, () => {
      let path = `/twitter/${option}/noradio`;
      it(`GET ${path}`, done => {
        chai
          .request(app)
          .get(path)
          .end((err, res) => {
            res.should.have.status(200);
            chai.expect(res.body).to.include({
              schemaVersion: 1,
              label: option,
              color: "blue"
            });
            chai.expect(res.body.message).to.be.a("string");
            done();
          });
      });
    });

    describe(`${capitaliseFirst(option)} - invalid user`, () => {
      let path = `/twitter/${option}/i`;
      it(`GET ${path}`, done => {
        chai
          .request(app)
          .get(path)
          .end((err, res) => {
            res.should.have.status(200);
            chai.expect(res.body).to.include({
              schemaVersion: 1,
              label: "twitter",
              color: "red",
              message: "user not found"
            });
            done();
          });
      });
    });
  });

  describe(`Verified - yes - @twitter`, () => {
    let path = `/twitter/verified/twitter`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "verified",
            color: "brightgreen",
            message: "yes"
          });
          done();
        });
    });
  });

  /**
   * Sidenote
   * --------
   * Twitter seem to keep banning test accounts, this is getting harder to test :(
   * If this test is failing that is probably why.
   */
  describe(`Verified - no - @exampleacc`, () => {
    let path = `/twitter/verified/exampleacc`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "verified",
            color: "red",
            message: "no"
          });
          done();
        });
    });
  });

  describe(`Verified - invalid user`, () => {
    let path = `/twitter/verified/i`;
    it(`GET ${path}`, done => {
      chai
        .request(app)
        .get(path)
        .end((err, res) => {
          res.should.have.status(200);
          chai.expect(res.body).to.include({
            schemaVersion: 1,
            label: "twitter",
            color: "red",
            message: "user not found"
          });
          done();
        });
    });
  });
});
