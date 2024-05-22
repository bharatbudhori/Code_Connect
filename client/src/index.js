import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CodeEnvironment from "./components/CodeEnvironment.jsx";
import CodeEditorProvider from "./context/CodeEditorProvider.jsx";
import Layout from "./components/Layout.jsx";
import ProblemSet from "./components/problemListPage/ProblemSet.jsx";
import ProblemProvider from "./context/ProblemProvider.jsx";
import About from "./components/aboutPage/About.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Hero from "./components/LandingPage.jsx";
import JoinRoom from "./components/room/joinRoom/JoinRoom.jsx";
import ConnectHomePage from "./components/connectPage/ConnectHomePage.jsx";
import ProfilePage from "./components/userProfilePage/ProfilePage.jsx";
import Heatmap from "./components/userProfilePage/Heatmap.jsx";
import WaitingRoom from "./components/waitingRoom/WaitingRoom.jsx";

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
        element: (
          <CodeEditorProvider>
            <CodeEnvironment />
          </CodeEditorProvider>
        ),
      },
      {
        path: "/room/:roomId/problems/:problemId",
        element: (
          <CodeEditorProvider>
            <CodeEnvironment />
          </CodeEditorProvider>
        ),
      },
      {
        path: "/room/:roomId",
        element: <WaitingRoom />,
      },
      {
        path: "/problems",
        element: <ProblemSet />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginForm />,
        // action: formAction,
      },
      {
        path: "/join",
        element: (
          <CodeEditorProvider>
            {" "}
            Programmer's cod <JoinRoom />
          </CodeEditorProvider>
        ),
      },
      {
        path: "/connect",
        element: <ConnectHomePage />,
      },
      {
        path: "/u/:username",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/test",
    element: <Heatmap />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
