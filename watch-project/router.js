import { Router } from "express";
import * as controller from "./controller.js"
import Auth from './Auth.js'
// import multer from "multer";
const router=Router();
///////Admin
router.route("/addadmin").post(controller.AddAdmin);
router.route("/addcategory").post(controller.AddCategory);
router.route("/adminlogin").post(controller.AdminLogin);
router.route("/home").get(Auth,controller.home);
router.route("/getemail/:username").get(controller.forgotUsername);
router.route("/adminpassword").patch(controller.forgotAdminpwd);

///////// Category/////
router.route("/categorygetdata").get(controller.Category_getdata);
router.route("/deletecategory/:id").delete(controller.deleteCategory);
router.route("/getcategorydetails/:id").post(controller.getcategoryfulldata);
router.route("/editcategorydetails/:id").patch(controller.editCategorydetails);

////// Customer /////
router.route("/addCustomer").post(controller.AddCustomer);
router.route("/customerLogin").post(controller.CustomerLogin);
router.route("/CustHome").get(Auth,controller.customerHome);
router.route("/addToCart").post(controller.AddToCart);

///////// Products
router.route("/editproducts/:id").patch(controller.editProdect);
router.route("/addProduct").post(controller.AddProducts);
router.route("/getCatWiseProducts/:category_name").get(controller.getCategoryWisedProduct);
router.route("/getProduct/:id").get(controller.getProduct);
router.route("/deleteproduct/:id").delete(controller.deleteProduct);
router.route("/getAllProducts").get(controller.getAllProducts);
router.route("/getCartProduct/:id").get(controller.getCartProduct);
router.route("/delAlltProduct/:id").delete(controller.deleteAllProducts);
router.route("/delCartProduct/:id").delete(controller.delCartProduct);
router.route("/addtowishList").post(controller.AddToWishList);
router.route("/getWishlistProduct/:id").get(controller.getWishlistProduct);
router.route("/delWishListProduct/:id").delete(controller.delwishListProduct);
router.route("/updateCartItem/:prodId").patch(controller.editQuantity);




export default router;