const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('gunframedb.sqlite');

const moveFetch = (moveName) => {
  const query = "SELECT Name as MoveName, DMG as DamageRaw FROM ggxrd WHERE character_id='14' AND Name=?";
  
  return new Promise((resolve, reject) => {
    db.all(query, [moveName], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = {
  moveFetch
};
