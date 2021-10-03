const pool = require("../../config/database");

module.exports = {
  insert: (data, callBack) => {
    pool.query(
      `INSERT INTO CATEOGRY_TABLE (C_TITLE) VALUES(?)`,
      [data.new_cateogry],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getCateogry: (callBack) => {
    pool.query(`SELECT * FROM CATEOGRY_TABLE`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  updateCateogry: (data, callBack) => {
    pool.query(
      `UPDATE CATEOGRY_TABLE SET C_TITLE=? WHERE C_ID=?`,
      [data.cateogry_title, data.cateogry_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteCateogry: (cateogry_id, callBack) => {
    pool.query(
      `DELETE FROM CATEOGRY_TABLE WHERE C_ID=?`,
      [cateogry_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
