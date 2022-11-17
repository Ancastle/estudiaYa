const DB_PASS = "xEsHvzKMZT1Q6yX0elzq";
const DB_USER = "postgres";
const DB_HOST = "containers-us-west-118.railway.app";
const PORT_DB = 5878;
const DB_NAME = "railway";

const Pool = require("pg").Pool;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,
  port: PORT_DB,
});

const getTests = (req, res) => {
  pool.query("SELECT * FROM test ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
    res.status(200).json(results.rows);
  });
};

const createTest = (request, response) => {
  const { name, gender } = request.body;

  pool.query(
    "INSERT INTO test (name, gender) VALUES ($1, $2) RETURNING *",
    [name, gender],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
  getTests,
  createTest,
};
