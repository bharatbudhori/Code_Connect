import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import React from 'react'

const SubmitReport = ({accepted, showAccepted, setShowAccepted}) => {

    const handleClose = () => {
        setShowAccepted(false);
    };

    // Create a dark theme
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            background: {
                paper: '#111827', // Set the background color of the Dialog
            },
            // You can customize other theme properties here
        },
    });

  return (
    // <Modal w-100>
    //     <h1>Submit Report</h1>
    //     {accepted ? (
    //         <>
    //             <h2 className='text-green'>Accepted</h2>
    //             <img
    //             src={'https://media.istockphoto.com/id/157030584/vector/thumb-up-emoticon.jpg?s=612x612&w=0&k=20&c=GGl4NM_6_BzvJxLSl7uCDF4Vlo_zHGZVmmqOBIewgKg='}
    //             alt="solved"
    //             className="w-96 h-96 object-cover"
    //             />
    //         </>
    //     ) : (
    //         <>
    //             <h2 className='text-red'>Wrong Answer</h2>
    //             <img
    //             src={'https://emojiisland.com/cdn/shop/products/5_grande.png?v=1571606116 '}
    //             alt="not solved"
    //             className="w-96 h-96 object-cover"
    //             />
    //         </>
    //     )}
    // </Modal>
<ThemeProvider theme={darkTheme}>

    <Dialog 
        open={showAccepted} 
        onClose={handleClose}
    >
        <DialogTitle>
            {
                accepted ? <h2 style={{ color: 'green' }}>Accepted</h2> : <h2 style={{ color: 'red' }}>Wrong Answer</h2>
            }
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                 {accepted ? (
            <>
                {/* <h2 style={{ color: 'red' }}>Accepted</h2> */}
                <img
                src={'https://media.istockphoto.com/id/157030584/vector/thumb-up-emoticon.jpg?s=612x612&w=0&k=20&c=GGl4NM_6_BzvJxLSl7uCDF4Vlo_zHGZVmmqOBIewgKg='}
                alt="solved"
                className="w-40 h-40 object-cover"
                />
            </>
        ) : (
            <>
                {/* <h2 style={{ color: 'red' }}>Wrong Answer</h2> */}
                <img
                src={'https://emojiisland.com/cdn/shop/products/5_grande.png?v=1571606116 '}
                alt="not solved"
                className="w-40 h-40 object-cover"
                />
            </>
        )}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            {/* Additional buttons or actions can be added here */}
        </DialogActions>
    </Dialog>
</ThemeProvider>
  )
}

export default SubmitReport