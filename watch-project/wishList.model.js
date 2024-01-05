import mongoose from "mongoose";
const wishlist_schema=new mongoose.Schema({
    cust_id:{type:String},
    prod_id:{type:String},
    productname:{type:String},
    category_name:{type:String},
    Description:{type:String},
    price:{type:String},
    quantity:{type:Number},
    banner:{type:String}
})

export default mongoose.model.wishlists||mongoose.model("wishlist",wishlist_schema)