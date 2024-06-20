import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import Creation from "./pages/Creation.jsx"
import Dressing from './pages/Dressing.jsx'
import './index.css'
import AddProduct from './pages/AddProduct.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/creation",
    element: <Creation />,
  },
  {
    path:"/dressing",
    element: <Dressing />,
  },
  {
    path:"/addproduct",
    element: <AddProduct />,
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
