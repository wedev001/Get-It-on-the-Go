const express = require('express');
const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignin');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/uploadProduct');
const getProductController = require('../controller/getProduct');
const updateProductController = require('../controller/updateProduct');
const getCategoryProduct = require('../controller/getCategoryProduct');
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct');
const getProductDetails = require('../controller/getProductDetails');
const addToCartController = require('../controller/addToCartController');
const countAddToCartProduct = require('../controller/countAddToCartProduct');
const addToCartViewProduct = require('../controller/addToCartViewProduct');
const deleteAddToCartProduct = require('../controller/deleteAddToCartProduct');
const updateAddToCartProduct = require('../controller/updateAddToCartProduct');
const searchProduct = require('../controller/searchProduct');
const filterProductController = require('../controller/filterProduct');
const CurrentUser = require('../controller/CurrentUser');
const router = express.Router();

router.post('/signup',userSignUpController)
router.post('/signin',userSignInController)
router.get('/user-details',authToken,userDetailsController)
router.get("/userLogout",userLogout)

//admin-panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//Product 
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart 
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.get("/profile",authToken,CurrentUser)

module.exports = router;