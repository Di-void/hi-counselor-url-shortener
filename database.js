// const sqlite3 = require("sqlite3").verbose();
/////////////////////////////////////////////////////////////
///
///You can select a database based on your specific needs.///
///
/////////////////////////////////////////////////////////////
//const MongoClient = require('mongodb').MongoClient;
const mysql = require("mysql");

const Db = () => {
  var connection = mysql.createConnection({
    database: "db_example",
    user: "root",
    password: "",
  });

  return connection;
};

const insert = async (url, short_url) => {
  // Didn't promisify because this function is quite trivial at runtime
  const cnx = Db();
  cnx.query(
    "INSERT INTO `url_maps` (url, short_url) VALUES (?,?)",
    [url, short_url],
    function (error) {
      if (error) {
        console.error("There was an error", error);
      }
      console.log("Successful Query!!");
    }
  );

  cnx.end();
};

const getUrlFromDB = function (short_url) {
  const cnx = Db();
  return new Promise((resolve, reject) => {
    cnx.query(
      "SELECT `url` FROM `url_maps` WHERE `short_url` = ?",
      [short_url],
      function (error, results) {
        if (error) {
          console.error("There was an error", error);
          reject(error);
        }

        if (results.length > 0) {
          console.log("Successful Query!!");
          const firstFound = results[0];
          const { url } = firstFound;
          // console.log(url);
          resolve(url);
        }

        resolve(null);
      }
    );
  });
};

module.exports = { insert, getUrlFromDB };
