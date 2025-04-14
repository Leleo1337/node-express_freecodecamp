import http from 'node:http'
import { type } from 'node:os'

const PORT = 5000
const server = http.createServer((req, res) => {
    if(req.url !== '/api'){
        res.end('erro')
    }
    res.write('this is some data \n')
    res.write('this is more data \n')
    res.end()
})

server.listen(PORT ,() => console.log(`server running on port: ${PORT}`))