require("dotenv").config();
const express = require("express");
const pool = require("./db").pool;

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.get("/event", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT events.id, events.title, events.event_location AS location, users.name AS creator, events.event_description AS description, events.confirmation, events.event_type AS type, events.start_time, events.end_time FROM events INNER JOIN users ON events.creator_id = users.id"
    );
    res.json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
