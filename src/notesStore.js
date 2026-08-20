"use strict";

// In-memory notes store. Kept intentionally simple so the app has no external
// service dependencies (no database) and runs anywhere out of the box.
class NotesStore {
  constructor() {
    this._notes = new Map();
    this._nextId = 1;
  }

  list() {
    return Array.from(this._notes.values()).sort((a, b) => b.id - a.id);
  }

  get(id) {
    return this._notes.get(Number(id)) || null;
  }

  create(text) {
    const trimmed = String(text == null ? "" : text).trim();
    if (!trimmed) {
      const err = new Error("Note text is required");
      err.status = 400;
      throw err;
    }
    const note = {
      id: this._nextId++,
      text: trimmed,
      done: false,
      createdAt: new Date().toISOString(),
    };
    this._notes.set(note.id, note);
    return note;
  }

  update(id, changes) {
    const note = this.get(id);
    if (!note) {
      return null;
    }
    if (typeof changes.text === "string") {
      const trimmed = changes.text.trim();
      if (trimmed) {
        note.text = trimmed;
      }
    }
    if (typeof changes.done === "boolean") {
      note.done = changes.done;
    }
    return note;
  }

  remove(id) {
    return this._notes.delete(Number(id));
  }

  clear() {
    this._notes.clear();
    this._nextId = 1;
  }
}

module.exports = { NotesStore };
