import pkg from 'pg';
const { Client } = pkg;
// Thiết lập kết nối đến PostgreSQL
const client = new Client({
  user: "postpres",
  host: "localhost",
  database: "webfinal",
  password: "0000",
  port: 5432,
});

client.connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

export const query = (text, params) => client.query(text, params);
