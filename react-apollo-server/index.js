const app = require('./server/server');
const db = require('./server/db/connection')

app.listen(4000, () => {
  console.log('Listening');
});

process.on('SIGTERM', () => {
  db.close();
  app.close();
});