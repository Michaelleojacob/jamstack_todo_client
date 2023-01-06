import React, { useState, createContext } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar, Button } from "@mui/material";

interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

interface SnackbarType {}

export const SnackbarContext = createContext<SnackbarType>(null!);

const CustomizedSnackbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </div>
  );
};

export default CustomizedSnackbar;

// return (
//   <Stack spacing={2} sx={{ width: "100%" }}>
//     <Button variant="outlined" onClick={handleClick}>
//       Open success snackbar
//     </Button>
//     <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
//       <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
//         This is a success message!
//       </Alert>
//     </Snackbar>
//     <Alert severity="error">This is an error message!</Alert>
//     <Alert severity="warning">This is a warning message!</Alert>
//     <Alert severity="info">This is an information message!</Alert>
//     <Alert severity="success">This is a success message!</Alert>
//   </Stack>
// );

// <SnackbarContext.Provider value={Alert}>
// {children}
// {/* <Snacsackbar> */}
// </SnackbarContext.Provider>
