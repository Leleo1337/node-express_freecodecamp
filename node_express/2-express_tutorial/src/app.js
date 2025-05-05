const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": 'text/html'})
    if(req.url === '/'){
        res.write('<h1> Home page </h1>')
        res.end()
    }else if((req.url === '/contact')){
        res.write('<h1> Contact page </h1>')
        res.end()
    }else{
        res.end('<h1> something went wrong! go back to <a href="/">Home</a></h1>')
    }
})
server.listen(5000, () => console.log('server running on port: 5000'))