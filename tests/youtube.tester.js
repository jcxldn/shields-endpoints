const app = require("../index");
const { capitaliseFirst } = require("../helpers");

const chai = require("chai");
const chaiHttp = require("chai-http");

const options = ["views", "likes", "dislikes", "comments"];

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("YouTube", () => {
  options.forEach(function(option) {
    describe(`${capitaliseFirst(option)} - (Rewind 2018)`, () => {
      let path = `/youtube/${option}/YbJOTdZBX1g`;
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
            //console.log(`is ${day}: ${isDayToday(day)}`);
            done();
          });
      });
    });

    describe(`${capitaliseFirst(option)} - invalid video id`, () => {
      let path = `/youtube/${option}/i`;
      it(`GET ${path}`, done => {
        chai
          .request(app)
          .get(path)
          .end((err, res) => {
            res.should.have.status(200);
            chai.expect(res.body).to.include({
              schemaVersion: 1,
              label: "youtube",
              color: "red",
              message: "video not found"
            });
            done();
          });
      });
    });
  });
});
