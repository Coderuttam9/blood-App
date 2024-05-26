import React from "react";
import Layout from "../components/Layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import DonorRegister from "../pages/auth/DonorRegister";
import PublicGrad from "./PublicGrad";

// create publice Router
export const publicRouter = [
  {
    element: <PublicGrad />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/donor-register",
            element: <DonorRegister />,
          },
        ],
      },
    ],
  },
];
