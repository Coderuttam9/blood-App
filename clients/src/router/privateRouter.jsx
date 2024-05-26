import Layout from "../components/Layout/Layout";
import ChangePassword from "../pages/auth/ChangePassword";
import ProfileSettings from "../pages/auth/ProfileSettings";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateGrad from "./PrivateGrad";

// create private router
export const privateRouter = [
  {
    element: <PrivateGrad />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            element: <Dashboard />,
            path: "/dashboard",
            children: [
              {
                path: "profile-setting",
                element: <ProfileSettings />,
              },
              {
                path: "change-passwords",
                element: <ChangePassword />,
              },
            ],
          },
        ],
      },
    ],
  },
];
