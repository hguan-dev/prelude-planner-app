require("dotenv").config();
const express = require("express");
const pool = require("./db").pool;

const app = express();

const port = 3000;

app.use(express.json());

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

app.post("/event/:id", async (req, res) => {
  const values = [
    req.params.id,
    req.body.title,
    req.body.start_time,
    req.body.end_time,
    req.body.location,
    req.body.description,
    req.body.type,
  ];
  try {
    await pool.query(
      "UPDATE events SET (title, start_time, end_time, event_location, event_description, event_type) = ($2, $3, $4, $5, $6, $7) WHERE id = $1",
      values
    );
    const result = await pool.query(
      "SELECT events.id, events.title, events.event_location AS location, users.name AS creator, events.event_description AS description, events.confirmation, events.event_type AS type, events.start_time, events.end_time FROM events INNER JOIN users ON events.creator_id = users.id WHERE events.id = $1",
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
