/**
 * 消息返回中间件
*/

class Result {
  constructor(flag = true, info = '', code = 200, data = {}) {
    this.flag = flag
    this.flagCode = code
    this.flagInfo = info
    this.resData = data
  }

  setCtx(ctx) {
    this.ctx = ctx
  }

  code(flagCode) {
    this.flagCode = flagCode
    return this
  }

  info(flagInfo) {
    this.flagInfo = flagInfo
    return this
  }

  data(resData) {
    this.resData = resData
    return this
  }

  merge() {
    const res = {
      flag: this.flag,
      code: this.flagCode,
      info: this.flagInfo,
      data: this.resData
    }
    this.ctx.body = res
  }
}

function success(info = 'ok', data, code) {
  let res = new Result(true, info, code, data)
  res.setCtx(this);
  res.merge();
}

function fail(info = 'err', data, code) {
  let res = new Result(false, info, code, data)
  res.setCtx(this);
  res.merge();
}

function result(flag, info, data, code) {
  let res = new Result(flag, info, code, data);
  res.setCtx(this);
  res.merge();
}

export default function () {
  return async function (ctx, next) {
    ctx.success = success.bind(ctx);
    ctx.fail = fail.bind(ctx)
    ctx.result = result.bind(ctx);
    await next();
  }
}