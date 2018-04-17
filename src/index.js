var KoaServer = require('koa-server')
var server = new KoaServer()
 
server.get('/', function*(){
  this.body = 'hello world'
})

server.listen(process.env.PORT || 3000)
