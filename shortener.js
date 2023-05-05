const { insert, getUrlFromDB } = require("./database"); // Assuming database.js is in the same directory

const generateShortUrl = function () {
  let count = 0;
  let randomCombnation = "";
  const randoms = [1, 2, 3, 4, 5, 6, 7, "a", "b", "c", "d", "e", "f", "g"];
  while (count < 10) {
    const luckyNumber = Math.floor(Math.random() * randoms.length);
    randomCombnation = randomCombnation + randoms[luckyNumber];
    count++;
  }
  return randomCombnation;
};

const shorten = async (url) => {
  const namespace = "D2";
  const shortUrl = `${namespace}${generateShortUrl()}`;
  insert(url, shortUrl);
  return shortUrl;
};

const getUrl = () => {
  // console.log("shortener js", shortUrl);
  const db = getUrlFromDB();
  return db;
};

module.exports = { shorten, getUrl };
