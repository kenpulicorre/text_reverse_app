const request = require("supertest");
const app = require("../src/app");
it("respond with json  ", (done) => {
  request(app)
    .get("/pruebat")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

it("respond with json if query send ", async (done) => {
  request(app)
    .get("/texto?text=olo")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(400);
});
