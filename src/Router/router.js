import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Home/ProductCards/ProductDetails/ProductDetails";

export const router =createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`),
                element: <ProductDetails />
            },
            
        ]
    }
])