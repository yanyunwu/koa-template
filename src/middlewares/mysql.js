import pool from '../utils/mysql'

export default function () {
  return async function (ctx, next) {
    ctx.pool = pool
    await next()
  }
}