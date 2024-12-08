import React from 'react'
//import {Outlet , Link} from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

 import Home from '../components/Home.jsx'
import Product from '../components/Product.jsx';  
import ProductList from '../components/ProductList.jsx';  
import Login from '../components/Login.jsx';
import Navigation from '../components/Navigation.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
    
        <Route path="/ShoppingCart/" element={<Navigation/>}>
         <Route path="/ShoppingCart/" element={<Home/>} />
         <Route path="/ShoppingCart/product" element={<Product/>} />
      
        <Route path="/ShoppingCart/login" element={<Login />} />
    </Route>
    )
)

const Root = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Root