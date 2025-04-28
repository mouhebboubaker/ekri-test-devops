const request = require("supertest");
const app = require("../server");

describe("Test the maisons path", () => {
  it("should respond with 200 ok", async () => {
    const response = await request(app).get("/maisons");
    expect(response.statusCode).toBe(200);
  });
});
