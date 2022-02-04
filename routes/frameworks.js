const frameworksRouter = require("express").Router();
const connection = require("../db-config");

frameworksRouter.post("/", (req, res) => {
  const Joi = require("joi");
  const { error } = Joi.object({
    framework_name: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    res.status(422).json({ error: error.message });
  } else {
    const sql = `INSERT INTO framework SET ?`;
    connection.query(sql, [req.body], (err, results) => {
      if (err) {
        res.status(500).send({ error: err });
      } else {
        res.status(201).json({
          id: results.insertId,
          ...req.body,
        });
      }
    });
  }
});

frameworksRouter.get("/", (req, res) => {
  const sql = `SELECT * FROM framework`;
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(`Error: ${err.message}`);
    } else if (results.length === 0) {
      res.status(404).json({ error: "ressource empty" });
    } else {
      res.status(200).json(results);
    }
  });
});

frameworksRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM framework WHERE id=?`;
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send(`Error: ${err.message}`);
    } else if (results.length === 0) {
      res.status(404).json({ error: "ressource empty" });
    } else {
      res.status(200).json(results);
    }
  });
});

frameworksRouter.get("/:id/framework", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM framework WHERE project_id=?`;
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send(`Error: ${err.message}`);
    } else if (results.length === 0) {
      res.status(404).json({ error: "ressource empty" });
    } else {
      res.status(200).json(results);
    }
  });
});

frameworksRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `UPDATE framework SET ? WHERE id=?`;
  connection.query(sql, [req.body, id], (err, results) => {
    if (err) {
      res.status(500).send(`Error: ${err.message}`);
    } else if (results.length === 0) {
      res.status(404).json({ error: "ressource empty" });
    } else {
      res.status(200).json(results);
    }
  });
});

frameworksRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM framework WHERE id=?`;
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send(`Error: ${err.message}`);
    } else if (results.length === 0) {
      res.status(404).json({ error: "no ressource" });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = frameworksRouter;
