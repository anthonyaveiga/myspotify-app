const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '1.1.1.1',
    user: 'root',
    password: 'password',
    database: 'spotify'
  });
}
