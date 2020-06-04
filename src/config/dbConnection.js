const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.84.162.210',
    user: 'root',
    password: 'pass2020',
    database: 'spotify'
  });
}
