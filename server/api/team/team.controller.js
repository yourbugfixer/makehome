const {
  insert,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByID,
} = require("./team.service");

module.exports = {
  insertEmployee: (req, res) => {
    const body = { ...req.body, ...req.files.employee_image };
    insert(body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      getEmployee((err, results) => {
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

  getEmployee: (req, res) => {
    getEmployee((err, results) => {
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

  updateEmployee: (req, res) => {
    const body = req.body;
    updateEmployee(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      getEmployee((err, results) => {
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

  deleteEmployee: (req, res) => {
    const employe_id = req.params.employe_id;
    deleteEmployee(employe_id, (err, results) => {
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
      getEmployee((err, results) => {
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

  getEmployeeByID: (req, res) => {
    const employee_id = req.params.employee_id;
    getEmployeeByID(employee_id, (err, results) => {
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

      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
