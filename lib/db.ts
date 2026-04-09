import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',         // cPanel: usually localhost
  user: 'cpanelusername_dbuser',
  password: 'your_db_password',
  database: 'cpanelusername_tree_inspection_db',
  waitForConnections: true,
  connectionLimit: 10,
});

export default pool;