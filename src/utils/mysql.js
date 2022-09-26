import mysql from 'mysql2/promise'

let env = process.env

// mysql数据库配置
let options = {
  host: env.APP_MYSQL_HOST,
  database: env.APP_MYSQL_DATABASE,
  port: 3306,
  user: env.APP_MYSQL_USERNAME,
  password: env.APP_MYSQL_PASSWORD,
  waitForConnections: env.waitForConnections === 'true',
  connectionLimit: parseInt(env.connectionLimit),
  queueLimit: parseInt(env.queueLimit)
}

const pool = mysql.createPool(options)

export default {
  async execute(sql, values) {
    return (await pool.execute(sql, values))[0]
  },

  async query(sql, values) {
    return (await pool.query(sql, values))[0]
  }
}