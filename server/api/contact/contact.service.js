const pool = require("../../config/database");

module.exports = {
  insert: (data, callBack) => {
    pool.query(
      `INSERT INTO MESSAGE_TABLE (NAME,EMAIL,PHONE,SUBJECT,MESSAGE,STATUS) VALUES(?,?,?,?,?,?)`,
      [
        data.contact_name,
        data.contact_email,
        data.contact_phone,
        data.contact_subject,
        data.contact_message,
        data.contact_status,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getMessage: (callBack) => {
    pool.query(`SELECT * FROM MESSAGE_TABLE`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  updateStatus: (data, callBack) => {
    pool.query(
      `UPDATE MESSAGE_TABLE SET STATUS=? WHERE ID=?`,
      [data.contact_status, data.message_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
