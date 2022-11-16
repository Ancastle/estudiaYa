const DB_PASS = "xEsHvzKMZT1Q6yX0elzq";
const DB_USER = "postgres";
const DB_HOST = "containers-us-west-118.railway.app";
const PORT = 5878;
const DB_NAME = "railway";

const Pool = require("pg").Pool;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,
  port: PORT,
});

const getTest = (req, res) => {
  pool.query("SELECT * FROM test ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.status(200).json(results.rows);
  });
};
