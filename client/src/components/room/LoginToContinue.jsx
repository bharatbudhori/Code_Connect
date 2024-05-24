// // import { useEffect, useState } from "react";

// // function LoginToContinue({ toShow }) {

// //   const [showModal, setShowModal] = useState(toShow);

// //     useEffect(() => {
// //         setShowModal(toShow);
// //     }, [toShow]);

// //   const handleModalClose = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <>
// //       {showModal && (
// //         <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
// //           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
// //             <div className="bg-gray-800 p-6 rounded-md">
// //               <h2 className="text-2xl mb-4">Please Login to Continue</h2>

// //               <button
// //                 onClick={handleModalClose}
// //                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
// //               >
// //                 Continue
// //               </button>

// //               <button
// //                 onClick={handleModalClose}
// //                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
// //               >
// //                 Continue
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default LoginToContinue;

// // Import necessary dependencies
import React, { useContext, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import "tailwindcss/tailwind.css";
import GlobalContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "./loginAnimation.json";

// Create the LoginToContinue component
const LoginToContinue = () => {
  const { showLoginToContinueModal, setShowLoginToContinueModal } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login", { replace: true });
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    setShowLoginToContinueModal(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("showLoginToCOntuneu", showLoginToContinueModal);
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={showLoginToContinueModal}
        onClose={() => setShowLoginToContinueModal(false)}
      >
         <DialogTitle className="text-center">
          Please login / Sign-up to continue.
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div >
              <Lottie animationData={loginAnimation} loop={true} style={{height:350}} />
            </div>
          </DialogContentText>
        </DialogContent>
       
        <DialogActions className="-mt-10">
          <Button onClick={() => setShowLoginToContinueModal(false)}>
            Cancel
          </Button>
          <Button onClick={onLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default LoginToContinue;
