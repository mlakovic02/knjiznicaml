const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'ucka.veleri.hr',
  user: 'mlakovic', // your MySQL username
  password: '11', // your MySQL password
  database: 'mlakovic' // replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.json());

// GET endpoint for rezervirane_knjige
app.get('/api/rezervirane_knjige', (req, res) => {
  const query = 'SELECT * FROM rezervacije';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send({ error: 'Database query failed' });
    } else {
      res.json({ data: results });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
