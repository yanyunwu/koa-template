import Router from "koa-router";

const router = new Router();

router.get('/', async (ctx) => {
  const sql = `SELECT * FROM user`
  let res = await ctx.pool.execute(sql)
  ctx.success('ok', res)
})

export default router;
