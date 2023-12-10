// import { useEffect, useState } from "react";

// function LoginToContinue({ toShow }) {
  
//   const [showModal, setShowModal] = useState(toShow);

//     useEffect(() => {
//         setShowModal(toShow);
//     }, [toShow]);

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {showModal && (
//         <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
//           <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
//             <div className="bg-gray-800 p-6 rounded-md">
//               <h2 className="text-2xl mb-4">Please Login to Continue</h2>

//               <button
//                 onClick={handleModalClose}
//                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
//               >
//                 Continue
//               </button>

//               <button
//                 onClick={handleModalClose}
//                 className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default LoginToContinue;

// Import necessary dependencies
import React, { useContext, useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import "tailwindcss/tailwind.css";

// Create the LoginToContinue component
const LoginToContinue = ({
    isOpen,
    onClose,
    onLogin,
  
}) => {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Dialog open={isOpen} onClose={onClose}>
                <DialogTitle>Create Room</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please login / Sign up create to create new room.
                    </DialogContentText>
                
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onLogin}>Login</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default LoginToContinue;
