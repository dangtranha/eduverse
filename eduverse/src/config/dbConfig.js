// src/config/dbConfig.js
import pkg from 'pg';
const { Pool } = pkg;

// Cấu hình kết nối
const pool = new Pool({
  user: "postpres",
  host: "localhost",
  database: "webfinal",
  password: "0000",
  port: 5432,
});

// Hàm truy vấn
const query = (text, params) => pool.query(text, params);

export { query };
