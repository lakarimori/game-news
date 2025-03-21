import { Client } from "pg";

async function query(query) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV !== "development",
  });
  await client.connect();

  try {
    const result = await client.query(query);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }
}

export default {
  query,
};
