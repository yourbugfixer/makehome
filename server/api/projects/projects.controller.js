const {
  insert,
  getProjects,
  filterProjects,
  updateProject,
  deleteProject,
} = require("./projects.service");

module.exports = {
  insertProject: (req, res) => {
    const body = { ...req.body, ...req.files.project_image };
    insert(body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      getProjects((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
          message: "Saved successfully",
        });
      });
    });
  },

  getProjects: (req, res) => {
    getProjects((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  filterProjects: (req, res) => {
    const body = req.body;
    filterProjects(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  updateProject: (req, res) => {
    const body = req.body;
    updateProject(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      getProjects((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json({
          success: 1,
          data: results,
          message: "updated successfully",
        });
      });
    });
  },

  deleteProject: (req, res) => {
    const project_id = req.params.project_id;
    deleteProject(project_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      getProjects((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
          message: "Removed successfully",
        });
      });
    });
  },
};
