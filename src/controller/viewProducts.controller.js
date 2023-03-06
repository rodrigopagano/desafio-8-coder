const session = require("express-session");
const productManagerDB = require("../dao/ProductManagerDB");


const viewsBd = async (req, res) => {
    
    const {limit, page, sort, ...query} = req.query;
    const products= await productManagerDB.getProduct(page, limit,sort, query);
   
    const product = products.docs.map((product) => ({
        title:product.title,
        description:product.description,
        category:product.category,
        price:product.price,
        stock:product.stock,
    }
   
    )) 
     
    res.render("viewProduct", {
       products: product,
       totalPage: products.totalPages,
       page:products.page,
       prev: products.hasPrevPage,
       next: products.hasNextPage,
       sessions: req.session
    }
           
)}


module.exports ={
    viewsBd,
}