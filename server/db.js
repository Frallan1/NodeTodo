const Pool = require("pg").Pool;

const pool = new Pool({
    user: "doadmin",
    ssl:"true",
    password: "gwf7gnl8vqw1r2qs",
    host: "db-postgresql-fra1-76505-do-user-7871475-0.a.db.ondigitalocean.com",
    port: 25060,
    database: "perntodo"
});

module.exports = pool;
