const projectsRouter = require("express").Router();
const connection = require("../db-config");

projectsRouter.post("/", (req, res) => {
  const Joi = require("joi");
  const { error } = Joi.object({
    project_name: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    res.status(422).json({ error: error.message });
  } else {
    const create = `INSERT INTO project SET ?`;
    connection.query(create, [req.body], (err, results) => {
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

projectsRouter.get("/", (req, res) => {
  const sql = `SELECT * FROM project`;
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

projectsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM project WHERE id=?`;
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

projectsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `UPDATE project SET ? WHERE id=?`;
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

projectsRouter.get("/:id/", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM WHERE project_id=?`;
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

projectsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM project WHERE id=?`;
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

module.exports = projectsRouter;
