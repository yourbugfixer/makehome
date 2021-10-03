const pool = require("../../config/database");

module.exports = {
  insert: (data, callBack) => {
    var base64Image =
      "data:" +
      data.mimetype +
      ";base64," +
      Buffer.from(data.data).toString("base64");
    pool.query(
      `INSERT INTO TEAM_TABLE (NAME,DESIGNATION,IMAGE) VALUES(?,?,?)`,
      [data.employee_name, data.employee_designation, base64Image],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getEmployee: (callBack) => {
    pool.query(`SELECT * FROM TEAM_TABLE`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  getEmployeeByID: (employee_id, callBack) => {
    pool.query(
      `SELECT * FROM TEAM_TABLE where ID=?`,
      [employee_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateEmployee: (data, callBack) => {
    pool.query(
      `UPDATE TEAM_TABLE SET NAME=?,DESIGNATION=?,IMAGE WHERE ID=?`,
      [
        data.employe_name,
        data.employe_designation,
        data.employe_image,
        data.employe_id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteEmployee: (employe_id, callBack) => {
    pool.query(
      `DELETE FROM TEAM_TABLE WHERE ID=?`,
      [employe_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
