import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeEnvironment from "./components/CodeEnvironment.jsx";
import CodeEditorProvider from "./context/CodeEditorProvider.jsx";
import Room from "./components/room.jsx";
import Layout from "./components/Layout.jsx";
import YourOutput from "./components/YourOutput.jsx";
import CustomInput from "./components/CustomInput.jsx";
import ExpectedOutput from "./components/ExpectedOutput.jsx";
import ProblemSet from "./components/ProblemSet.jsx";
import ProblemProvider from "./context/ProblemProvider.jsx";
import About from "./components/About.jsx";
import LoginForm,{formAction} from "./components/LoginForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <ProblemProvider>
            <ProblemSet />
          </ProblemProvider>
        ),
      },
      {
        path: "problems/:problemId",
        element: (
          <CodeEditorProvider>
            <CodeEnvironment />
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
            element: <ExpectedOutput />,
          },
        ],
      },
      {
        path: "room",
        element: <Room />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "login",
        element: <LoginForm />,
        action: formAction
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
