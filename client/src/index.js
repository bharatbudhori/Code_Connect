import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeEnviornment from "./components/CodeEnviornment.jsx";
import CodeEditorProvider from "./context/CodeEditorProvider.jsx";
import Room from "./components/room.jsx";
import Layout from "./components/Layout.jsx";
import YourOutput from "./components/YourOutput.jsx";
import CustomInput from "./components/CustomInput.jsx";
import ExpectedOutput from "./components/ExpectedOutput.jsx";

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
        children: [
          {
            path: "custom_input",
            element: <CustomInput />,
          },
          {
            path: "your_output",
            element: <YourOutput />,
          },
          {
              path: "expected_output",
              element: <ExpectedOutput/>,
          },
        ],
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
