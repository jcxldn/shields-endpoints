const app = require("../index");
const { isDayToday, days } = require("../helpers");

const chai = require("chai");
const chaiHttp = require("chai-http");

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Is It", () => {
  days.forEach(function(day) {
    describe(`Is it ${day}? (based on current day)`, () => {
      it(`GET /is-it/${day}`, done => {
        chai
          .request(app)
          .get(`/is-it/${day}`)
          .end((err, res) => {
            res.should.have.status(200);
            chai.expect(res.body).to.eql({
              schemaVersion: 1,
              label: `is it ${day}`,
              message: isDayToday(day) ? "yes" : "no",
              color: isDayToday(day) ? "brightgreen" : "yellow"
            });
            //console.log(`is ${day}: ${isDayToday(day)}`);
            done();
          });
      });
    });
  });
});
