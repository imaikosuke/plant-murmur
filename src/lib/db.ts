import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.AZURE_POSTGRESQL_USER,
  host: process.env.AZURE_POSTGRESQL_HOST,
  database: process.env.AZURE_POSTGRESQL_DATABASE,
  password: process.env.AZURE_POSTGRESQL_PASSWORD,
  port: 5432, // PostgreSQLのデフォルトポート
  ssl: { rejectUnauthorized: false }, // SSL接続の設定
});

export default pool;
