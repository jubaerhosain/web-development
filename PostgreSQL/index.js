const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "pass",
    database: "mydb",
});

// Perform a query using the connection pool
async function performQuery() {
    try {
        const res = await pool.query("SELECT NOW()");
        console.log(res.rows[0]);
    } catch (err) {
        console.error(err);
    }
}

performQuery();
