const server = require("./../server");
const request = require("supertest");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("sanity", () => {
  test("test is working", () => {
    expect(1 + 1).toBe(2);
  });
});
