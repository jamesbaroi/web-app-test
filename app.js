import express from 'express';
import morgan from 'morgan';
import mysql from 'mysql';

// Config
import dotenv from 'dotenv';
dotenv.config();
const nodenv = process.env.NODE_ENV;
const host = process.env.HOST;
const port = process.env.PORT;
const db_host = process.env.MYSQL_DATABASE_HOST;
const db_user = process.env.MYSQL_DATABASE_USER;
const db_pass = process.env.MYSQL_DATABASE_PASS;
const db_name = process.env.MYSQL_DATABASE_NAME;

// Create database
const db = mysql.createPool({
  host: db_host,
  user: db_user,
  password: db_pass,
  database: db_name
});

// Create app
const app = express();

// Log
if (nodenv === 'development') { app.use(morgan('dev')); }

// Parse
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// View
app.set('view engine', 'hbs');

// Route index
app.get('/', (req, res) => {
  res.render('index', { host: host, port: port });
});

// Route test
app.get('/test', (req, res) => {
  db.query('SELECT * FROM chemical_elements;', (error, results) => {
    if (error) throw error;
    res.render('test', {
      host: host,
      port: port,
      results: results
    });
  });
});

// Serve
app.listen(port || 8080, () => {
  console.log(`Server running in ${nodenv} at http://${host}:${port}`);
});