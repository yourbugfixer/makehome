const { insert, getMessage, updateStatus } = require("./contact.service");

module.exports = {
  insertMessage: (req, res) => {
    const body = req.body;
    insert(body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      getMessage((err, results) => {
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

  getMessage: (req, res) => {
    getMessage((err, results) => {
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

  updateStatus: (req, res) => {
    const body = req.body;
    updateStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      getMessage((err, results) => {
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
};
