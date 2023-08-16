const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('gunframedb.sqlite');

const moveFetch = (moveName) => {
  const query = "SELECT Name as MoveName, DMG as DamageRaw FROM ggxrd WHERE character_id='1' AND Name=?";
  
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

const moveList = (character_id) => {
  const query = "SELECT Name as MoveName FROM ggxrd WHERE character_id=?"

  return new Promise((resolve, reject) => {
    db.all(query, [character_id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const moveFullData = (moveName) => {
  const query = "SELECT * FROM ggxrd WHERE character_id='1' And Name=?"

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
  moveFetch,
  moveList,
  moveFullData,
};

//module.exports = {
 // moveList
//};