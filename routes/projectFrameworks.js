const projectFrameworksRouter = require("express").Router();
const connection = require("../db-config");

/* frameworksRouter.post("/", (req, res) => {
  const Joi = require("joi");
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    res.status(422).json({ error: error.message });
  } else {
    const sql = `INSERT INTO project_framework (project_id, framework_id) VALUES (?, ?)`;
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
});*/

projectFrameworksRouter.get("/", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT project_name, image, description, framework_name FROM project JOIN project_framework ON project.id=project_id JOIN framework ON framework.id=framework_id`;
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

module.exports = projectFrameworksRouter;
