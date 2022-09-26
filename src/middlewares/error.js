/**
 * 项目错误捕获中间件
*/

export default function () {
  return async function (ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.fail(err.message)
      console.log(err);
    }
  }
}