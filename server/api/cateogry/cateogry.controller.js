const {
  insert,
  getCateogry,
  updateCateogry,
  deleteCateogry,
} = require("./cateogry.service");

module.exports = {
  insertCateogry: (req, res) => {
    const body = req.body;
    insert(body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      getCateogry((err, results) => {
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

  getCateogry: (req, res) => {
    getCateogry((err, results) => {
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

  updateCateogry: (req, res) => {
    const body = req.body;
    updateCateogry(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      getCateogry((err, results) => {
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

  deleteCateogry: (req, res) => {
    const cateogry_id = req.params.c_id;
    deleteCateogry(cateogry_id, (err, results) => {
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
      getCateogry((err, results) => {
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
