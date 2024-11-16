import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails";
import ProductBar from "../pages/AllProducts/ProductBar/ProductBar";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Cart/Checkout";
import Shop from "../pages/AllProducts/Shop/Shop";
// import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Main from "../Layouts/Main/Main";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Additems from "../pages/Dashboard/Additems/Additems";
import AddCategory from "../pages/Dashboard/ManageItems/AddCategory";
import AddBrand from "../pages/Dashboard/ManageItems/AddBrand";
import Allitem from "../pages/Dashboard/Allitem/Allitem";
import AdninDashboard from "../pages/Dashboard/Dashboard/AdninDashboard";
import OrderList from "../pages/Dashboard/Order/OrderList/OrderList";
import OrderInvoices from "../pages/Dashboard/Order/OrderInvoices/OrderInvoices";
import OrderDetails from "../pages/Dashboard/Order/OrderDetails/OrderDetails";
import InVoices from "../pages/Dashboard/InVoices/InVoices";
import EmailInvoices from "../pages/Dashboard/InVoices/EmailInvoices";
import Profile from "../pages/Dashboard/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import WishList from "../pages/UsersAccessibility/WishList";
import MyOrders from "../pages/UsersAccessibility/MyOrders";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/productDetails/:id',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
        
            {
                path:'/login',
                element:<Login></Login>
            },
        
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/myOrders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/wishlist',
                element:<WishList></WishList>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
        
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:
        [
            {
                path:'/dashboard',
                element:<AdninDashboard></AdninDashboard>
            },
            {
                path:'allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'user/profile/:email',
                element:<Profile></Profile>
            },
            {
                path:'allitems',
                element:<Allitem></Allitem>
            },
            {
                path:'addItems',
                element:<Additems></Additems>
            },
            {
                path:'addCategory',
                element:<AddCategory></AddCategory>
            },
            {
                path:'addBrand',
                element:<AddBrand></AddBrand>
            },
            {
                path:'orderList',
                element:<OrderList></OrderList>
            },
            {
                path:'orderInvoices',
                element:<OrderInvoices></OrderInvoices>
            },
            {
                path:'orderDetails/:id',
                element:<OrderDetails></OrderDetails>
            },
            {
                path:'invoices/:id',
                element:<InVoices></InVoices>
            },
            {
                path:'emailInvoices/:id',
                element:<EmailInvoices></EmailInvoices>
            },

        ]
    }
]);


