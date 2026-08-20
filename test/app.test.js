"use strict";

const request = require("supertest");
const { createApp } = require("../src/app");

function setup() {
  const { app } = createApp();
  return app;
}

describe("Notes API", () => {
  test("GET /api/health reports ok", async () => {
    const app = setup();
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("starts with an empty notes list", async () => {
    const app = setup();
    const res = await request(app).get("/api/notes");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("creates a note and lists it", async () => {
    const app = setup();
    const create = await request(app)
      .post("/api/notes")
      .send({ text: "Buy milk" });
    expect(create.status).toBe(201);
    expect(create.body).toMatchObject({ text: "Buy milk", done: false });
    expect(create.body.id).toBeGreaterThan(0);

    const list = await request(app).get("/api/notes");
    expect(list.body).toHaveLength(1);
    expect(list.body[0].text).toBe("Buy milk");
  });

  test("rejects empty note text", async () => {
    const app = setup();
    const res = await request(app).post("/api/notes").send({ text: "   " });
    expect(res.status).toBe(400);
    expect(res.body.error).toMatch(/required/i);
  });

  test("toggles done via PATCH", async () => {
    const app = setup();
    const created = await request(app)
      .post("/api/notes")
      .send({ text: "Walk dog" });
    const id = created.body.id;

    const patched = await request(app)
      .patch(`/api/notes/${id}`)
      .send({ done: true });
    expect(patched.status).toBe(200);
    expect(patched.body.done).toBe(true);
  });

  test("deletes a note", async () => {
    const app = setup();
    const created = await request(app)
      .post("/api/notes")
      .send({ text: "Temp" });
    const id = created.body.id;

    const del = await request(app).delete(`/api/notes/${id}`);
    expect(del.status).toBe(204);

    const missing = await request(app).delete(`/api/notes/${id}`);
    expect(missing.status).toBe(404);
  });
});
