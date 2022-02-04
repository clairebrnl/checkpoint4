const projectsRouter = require("./projects"); 
const frameworksRouter = require("./frameworks");
const projectFrameworksRouter = require("./projectFrameworks");

const setupRoutes = (app) => {
  app.use("/api/projects", projectsRouter);
  app.use("/api/frameworks", frameworksRouter)
  app.use("/api/projects-details", projectFrameworksRouter)

};

module.exports = {
  setupRoutes,
};
