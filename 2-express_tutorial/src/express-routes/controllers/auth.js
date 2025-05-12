function sayWelcome(req,res){
   const { name } = req.body;
   if (name) {
      return res.status(200).send(`Welcome ${name}`);
   } else {
      return res.status(200).send("Please provide a name");
   }
}

module.exports = { sayWelcome }