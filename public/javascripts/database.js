const { Client } = require('./../node_modules/pg');


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Delicious',
  password: 'POstgrEs',
  port: 5432,
});


client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(res.rows);
  client.end();
});