const sql = require("mssql");

const config = {
  user: "your_username",
  password: "your_password",
  server: "your_server.database.windows.net",
  database: "your_database",
  options: {
    encrypt: true,
  },
};

export async function getConditionsData() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT id, moisture, timestamp FROM conditions");
    return result.recordset;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getConditionsDataByRange(start: string, end: string) {
  try {
    await sql.connect(config);
    const result = await sql.query`
            SELECT id, moisture, timestamp 
            FROM conditions 
            WHERE timestamp BETWEEN ${start} AND ${end}`;
    return result.recordset;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
