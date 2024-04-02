import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthProvider from './Provider/AuthProvider';
import Orders from './Components/Orders';
import PrivetRoute from './Route/PrivetRoute';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/orders",
        element: <PrivetRoute> <Orders /></PrivetRoute>
      },
      {
        path: "/profile",
        element: <PrivetRoute> <Profile /></PrivetRoute>
      },
      {
        path: "/dashboard",
        element: <PrivetRoute> <Dashboard /></PrivetRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
