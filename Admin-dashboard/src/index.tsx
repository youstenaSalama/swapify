import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Transactions from './pages/Transactions';
import Customers from './pages/Customers';
import PostsRequests from './pages/PostsRequests';
import OrderManagementDetail from './pages/OrderManagementDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>
  },
  {
    path: "/Transactions",
    element: <Transactions/>
  },
  {
    path: "/OrderManagementDetail",
    element: <OrderManagementDetail/>
  },

  
  {
    path: "/Customers",
    element: <Customers/>
  },
  {
    path: "/PostsRequests",
    element: <PostsRequests/>
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
