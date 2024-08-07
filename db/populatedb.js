const { Client } = require("pg");
const { connectionString } = require("pg/lib/defaults");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS usernames (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES 
('Bryan'),
('Odin'),
('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
