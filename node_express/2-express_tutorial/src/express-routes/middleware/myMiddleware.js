// here goes a middleware

function myMiddleware(req,res,next){
    console.log('middleware executado')
    next()
}

module.exports = { myMiddleware }