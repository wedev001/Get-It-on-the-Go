import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import SearchProduct from "../pages/SearchProduct";
import LandingPage from "../pages/LandingPage";
import CheckoutPage from "../pages/Checkout.js";
const router = createBrowserRouter([
   { // Routes
    path : "/",
    element : <App/>,
    children : [
        {
           path : "",
           element : <LandingPage/>
        },
        {
            path : "home",
            element : <Home/>
        },
        {
            path : "login",
            element : <Login/>
        },
        {
            path : "forgot-password",
            element : <ForgotPassword/>
        },
        {
            path : 'sign-up',
            element : <SignUp/>
        },
        {
            path : 'product-category',
            element : <CategoryProduct/>
        },
        {
            path : 'product/:id',
            element : <ProductDetails/>
        },
        {
            path : 'cart',
            element : <Cart/>
        },
        {
           path : 'profile',
           element : <Profile/>
        },
        {
            path : 'search',
            element : <SearchProduct/>
        },
        {
            path : 'checkout',
            element : <CheckoutPage/>
        },
        {
            path : 'admin-panel',
            element : <AdminPanel/>,
            children : [
                {
                    path : 'all-users',
                    element :<AllUsers/>
                },
                {
                    path : 'all-products',
                    element :<AllProducts/>
                },
            ]
        },
        
    ]
   }
])

export default router;