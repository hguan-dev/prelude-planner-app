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
    const result = await pool.query(`
      SELECT events.id,
             events.title,
             events.event_location AS location,
             users.name AS creator,
             events.event_description AS description,
             events.confirmation,
             events.event_type AS type,
             events.start_time,
             events.end_time
      FROM events
      INNER JOIN users
      ON events.creator_id = users.id`);
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
    const result = await pool.query(
      `
      WITH event AS (
          UPDATE events SET (
              title,
              start_time,
              end_time,
              event_location,
              event_description,
              event_type
          ) = ($2, $3, $4, $5, $6, $7)
          WHERE id = $1
          RETURNING *
      ) SELECT event.id,
               event.title,
               event.event_location AS location,
               users.name AS creator,
               event.event_description AS description,
               event.confirmation,
               event.event_type AS type,
               event.start_time,
               event.end_time
      FROM event
      INNER JOIN users
      ON event.creator_id = users.id`,
      values
    );
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

// didn't test
app.delete("/event/:id", async (req, res) => {
  try {
    await pool.query(`DELETE FROM events WHERE id = $1`, [req.params.id]);
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

// didn't test
app.post("/event", async (req, res) => {
  const values = [
    req.body.title,
    req.body.creator_id,
    req.body.location,
    req.body.description,
    req.body.start_time,
    req.body.end_time,
    req.body.type,
  ];
  try {
    const result = await pool.query(
      `
      WITH event AS (
          INSERT INTO events (
              title,
              creator_id,
              event_location,
              event_description,
              start_time,
              end_time,
              event_type
          ) VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING *
      ) SELECT event.id,
               event.title,
               event.event_location AS location,
               users.name AS creator,
               event.event_description AS description,
               event.confirmation,
               event.event_type AS type,
               event.start_time,
               event.end_time
      FROM event
      INNER JOIN users
      ON event.creator_id = users.id`,
      values
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
