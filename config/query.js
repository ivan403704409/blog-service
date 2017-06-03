var pg = require('pg')
// create a config to configure both pooling behavior 
// and client options 
// note: all config is optional and the environment variables 
// will be read if the config is not present 
var config = {
  user: 'abc', //env var: PGUSER 
  database: 'blog', //env var: PGDATABASE 
  password: 'abcxcv', //env var: PGPASSWORD 
  host: '127.0.0.1', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};
var pool = new pg.Pool(config);

async function query() {
  let connect = await pool.connect()
  try {
    let res = await connect.query.apply(connect, arguments)
    return res.rows
  } finally {
    connect.release()
  }
}

export default query