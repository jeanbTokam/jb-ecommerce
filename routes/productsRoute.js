const express = require("express");
const router = express.Router();
const Product = require('../models/productModel')


router.get('/getallproducts' , async(req,res)=>{
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
)
//create product










module.exports = router