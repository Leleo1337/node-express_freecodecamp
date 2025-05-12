const express = require("express");
const { products } = require("./data");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
   res.send(`
        <h1> Home page (api navigation) </h1>
        <a href='/api/products'> Products </a>
    `);
});

app.get("/api/products", (req, res) => {
   const newProduct = products.map((product) => {
      const { id, name, image } = product;
      return { id, name, image };
   });
   res.status(200).json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
   const { productID } = req.params;
   const singleProduct = products.find((product) => product.id === Number(productID));

   if (!singleProduct) {
      res.status(404).send("Product not Found");
   }

   res.status(200).json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
   console.log(req.params);
   res.send("hello world");
});

app.get("/api/v1/query", (req,res) =>{
   const {search,limit} = req.query
   let sortedProduct = [...products]
   if(search){
      sortedProduct = sortedProduct.filter((product) => {
         return product.name.startsWith(search)
      })
   }
   if(limit){
      sortedProduct = sortedProduct.slice(0, Number(limit))
   }
   if(sortedProduct.length < 1){
      //res.status(200).send('no products matched your search')
      return res.status(200).json({sucess: true, data: sortedProduct})
   }
   console.log(search,limit, sortedProduct)
   res.status(200).json(sortedProduct)
})


app.listen(PORT, () => console.log(`server listening on port ${PORT}`));