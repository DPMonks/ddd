"use strict";

const path = require("path");
const express = require("express");
const { NotesStore } = require("./notesStore");

// Build an Express app. The store is injectable so tests can use a fresh one.
function createApp(store = new NotesStore()) {
  const app = express();
  app.use(express.json());

  const api = express.Router();

  api.get("/health", (req, res) => {
    res.json({ status: "ok", uptime: process.uptime() });
  });

  api.get("/notes", (req, res) => {
    res.json(store.list());
  });

  api.post("/notes", (req, res) => {
    try {
      const note = store.create(req.body && req.body.text);
      res.status(201).json(note);
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  });

  api.patch("/notes/:id", (req, res) => {
    const note = store.update(req.params.id, req.body || {});
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  });

  api.delete("/notes/:id", (req, res) => {
    const removed = store.remove(req.params.id);
    if (!removed) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(204).end();
  });

  app.use("/api", api);

  // Serve the static web UI.
  app.use(express.static(path.join(__dirname, "..", "public")));

  return { app, store };
}

module.exports = { createApp };
