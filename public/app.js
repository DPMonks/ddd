"use strict";

const listEl = document.getElementById("note-list");
const emptyEl = document.getElementById("empty-state");
const formEl = document.getElementById("note-form");
const inputEl = document.getElementById("note-input");

async function api(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok && res.status !== 204) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed (${res.status})`);
  }
  return res.status === 204 ? null : res.json();
}

function render(notes) {
  listEl.innerHTML = "";
  emptyEl.classList.toggle("empty-state--hidden", notes.length > 0);

  for (const note of notes) {
    const li = document.createElement("li");
    li.className = `note${note.done ? " note--done" : ""}`;
    li.dataset.id = String(note.id);

    const text = document.createElement("span");
    text.className = "note__text";
    text.textContent = note.text;

    const toggle = document.createElement("button");
    toggle.className = "note__toggle";
    toggle.textContent = note.done ? "Done" : "Mark done";
    toggle.addEventListener("click", () => toggleNote(note));

    const del = document.createElement("button");
    del.className = "note__delete";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteNote(note.id));

    li.append(text, toggle, del);
    listEl.appendChild(li);
  }
}

async function refresh() {
  const notes = await api("/notes");
  render(notes);
}

async function toggleNote(note) {
  await api(`/notes/${note.id}`, {
    method: "PATCH",
    body: JSON.stringify({ done: !note.done }),
  });
  await refresh();
}

async function deleteNote(id) {
  await api(`/notes/${id}`, { method: "DELETE" });
  await refresh();
}

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = inputEl.value.trim();
  if (!text) {
    return;
  }
  await api("/notes", { method: "POST", body: JSON.stringify({ text }) });
  inputEl.value = "";
  inputEl.focus();
  await refresh();
});

refresh().catch((err) => {
  console.error(err);
});
