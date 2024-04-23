import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeEnvironment from "./components/CodeEnvironment.jsx";
import CodeEditorProvider from "./context/CodeEditorProvider.jsx";
import Room from "./components/room.jsx";
import Layout from "./components/Layout.jsx";
import ProblemSet from "./components/ProblemSet.jsx";
import ProblemProvider from "./context/ProblemProvider.jsx";
import About from "./components/About.jsx";
import LoginForm, { formAction } from "./components/LoginForm.jsx";
import Hero from "./components/LandingPage.jsx";
import JoinRoom from "./components/JoinRoom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "problems/:problemId",
        element:
          <CodeEditorProvider>
           <CodeEnvironment /> 
         </CodeEditorProvider>
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/problems",
        element: (
          <ProblemProvider>
            <ProblemSet />
          </ProblemProvider>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginForm />,
        // action: formAction
      },
      {
        path: "/join",
        element: (
          <CodeEditorProvider>
            {" "}
            <JoinRoom />
          </CodeEditorProvider>
        ),
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
