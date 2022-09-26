
/**
 * 开发环境执行脚本
*/

const util = require('util');
const childProcess = require('child_process');
const exec = util.promisify(childProcess.exec);

async function run() {
  try {
    let { stdout, stderr } = await exec('yarn build:dev');
    console.log(stdout);
    console.log(stderr);
    require('../dist/boundle')
  } catch (err) {
    console.log(err);
  }
}

run()
