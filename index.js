require('dotenv').config();
const app = require('./app');
const connection = require('./db-config');

const PORT = process.env.PORT || 8000;

connection.connect((err) => {
  if (err) {
    console.error('Error connecting : ', err.stack);
  } else {
    console.log('Connected to database ' + connection.threadId);
  }
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server running on http://localhost:${PORT}`);
});
