import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Menu from './Components/Menu.jsx';
import About from './Components/About.jsx';
import Cart from './Components/Cart.jsx';
import Button from './Components/Button.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path:"/",
    element:<Header/>
  },

  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/Menu",
    element:<Menu/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Cart",
    element:<Cart cart={Cart}/>
  },
  
  
  
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
