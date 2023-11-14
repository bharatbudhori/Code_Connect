import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CodeEnviornment from "./components/CodeEnviornment.jsx";
import CodeEditorProvider from "./context/CodeEditorProvider.jsx";
import Room from "./components/room.jsx";
import Test from "./components/Test.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path:"",
      //   element:<Test/>,
      // },
      {
        path: "code_env",
        element: (
          <CodeEditorProvider>
            <CodeEnviornment />
          </CodeEditorProvider>
        ),
      },
      {
        path: "room",
        element: <Room/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
