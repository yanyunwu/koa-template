import http from 'http'
import './src/utils/env'
import app from './src/app'

const server = http.createServer(app.callback())
server.listen(3000, () => console.log('项目已启动：http://localhost:3000/'))

