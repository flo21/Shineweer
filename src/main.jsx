import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Creation from "./pages/Creation.jsx";
import DisplayCard from './components/DisplayCard.jsx';
import ProductComponent from './components/Product_Component.jsx';
import './index.css';
import AddProduct from './pages/AddProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/creation",
    element: <Creation />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
  {
    path: "/displaycard",
    element: <DisplayCard />,
  },
  {
    path: "/product/:id",
    element: <ProductComponent />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
