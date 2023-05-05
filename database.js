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

const getUrlFromDB = function () {
  const cnx = Db();
  return cnx;
};

module.exports = { insert, getUrlFromDB };
