const http = require('http')
const path = require('path')
const { readFileSync } = require('fs')

const PORT = 5000

// get all files 
const homePage = readFileSync(path.join(__dirname, 'navbar-app' ,'index.html'))
const burguerIcon = readFileSync(path.join(__dirname, 'navbar-app' ,'./assets/burger-menu-svgrepo-com.svg'))
const styles = readFileSync(path.join(__dirname, 'navbar-app' ,'style.css'))
const script = readFileSync(path.join(__dirname, 'navbar-app' ,'script.js'))

const server = http.createServer((req,res) => {

   // html file
   if(req.url === '/'){
      res.writeHead(200, {'content-type': 'text/html'})
      res.write(homePage)
      res.end()
   }

   // css file
   if(req.url === '/style.css'){
      res.writeHead(200, {'content-type': 'text/css'})
      res.write(styles)
      res.end()
   }

   // javascript file
   if(req.url === '/script.js'){
      res.writeHead(200, {'content-type': 'text/javascript'})
      res.write(script)
      res.end()
   }

   //burguer svg file 
   if(req.url === '/assets/burger-menu-svgrepo-com.svg'){
      res.writeHead(200, {'content-type': 'image/svg'})
      res.write(burguerIcon)
      res.end()
   }
}) 

server.listen(PORT, () => console.log(`server running on port ${PORT}`)) 