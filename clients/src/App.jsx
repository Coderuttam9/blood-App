import { RouterProvider } from "react-router-dom";
import router from "./router/route";
import "./App.css";

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginUser } from "./features/auth/authApiSilce";

function App() {
  // me route checking user auth validation
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userLogin")) {
      dispatch(getLoginUser());
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />

      {/* createting toster  */}
      <ToastContainer
        style={{ zIndex: 9999 }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
