import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails";
import ProductBar from "../pages/AllProducts/ProductBar/ProductBar";


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
                path:'/products',
                element:<ProductBar></ProductBar>
            }
        ]
    },
]);


