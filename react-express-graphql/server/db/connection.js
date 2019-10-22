var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE Song (id INTEGER PRIMARY KEY, title CHAR(200))"); // SQLITE primary key will be default auto-increment
    db.run("CREATE TABLE Lyric (id INTEGER PRIMARY KEY, likes INTEGER, content TEXT, song_id INTEGER)");
});

module.exports = db;
