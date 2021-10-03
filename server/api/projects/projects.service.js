const pool = require("../../config/database");

module.exports = {
  insert: (data, callBack) => {
    var base64Image =
      "data:" +
      data.mimetype +
      ";base64," +
      Buffer.from(data.data).toString("base64");
    pool.query(
      `INSERT INTO PROJECT_TABLE (TITLE,IMAGE,C_ID) VALUES(?,?,?)`,
      [data.project_title, base64Image, data.project_cateogry],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getProjects: (callBack) => {
    pool.query(
      `SELECT p.*,q.C_TITLE FROM PROJECT_TABLE p INNER JOIN CATEOGRY_TABLE q on p.C_ID=q.C_ID`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  filterProjects: (data, callBack) => {
    pool.query(
      `SELECT * FROM PROJECT_TABLE WHERE C_ID=?`,
      [data.cateogry_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  updateProject: (data, callBack) => {
    pool.query(
      `UPDATE PROJECT_TABLE SET PROJECT_IMAGE=?,CID=? WHERE PID=?`,
      [data.project_image, data.cateogry_id, data.project_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteProject: (project_id, callBack) => {
    pool.query(
      `DELETE FROM PROJECT_TABLE WHERE PID=?`,
      [project_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
