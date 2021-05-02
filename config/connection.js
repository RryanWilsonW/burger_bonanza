const mysql = require('mysql');


//const connection = mysql.createConnection({
//    host: 'localhost',
//    port: 3306,
//    user: 'root',
//    password: 'C@rb0n2020',
//    database: 'burgers_db',
//  });
  
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  // Makes a connection.
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
  });
  
  // Export connection
  module.exports = connection;
  