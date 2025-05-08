function authorize(req,res,next){
    const { user } = req.query
    if(user === 'leo'){
        req.user = {name: 'leo', id: '1'}
        next()
    }else{
        res.status(401).send('Unaunthorized')
    }
}

module.exports = authorize