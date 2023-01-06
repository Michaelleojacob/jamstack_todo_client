import { Snackbar } from "@mui/material";
import { Alert, AlertColor } from "@mui/material";
import React, { createContext, useContext } from "react";

type SnackBarContextActions = {
  showSnackBar: (text: string, typeColor: AlertColor) => void;
};

export const SnackBarContext = createContext({} as SnackBarContextActions);

interface SnackBarContextProviderProps {
  children: React.ReactNode;
}

export const SnackBarProvider: React.FC<SnackBarContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const [typeColor, setTypeColor] = React.useState<AlertColor>("info");

  const showSnackBar = (text: string, color: AlertColor) => {
    setMessage(text);
    setTypeColor(color);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTypeColor("info");
  };

  return (
    <SnackBarContext.Provider value={{ showSnackBar }}>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={typeColor} variant="filled">
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackBarContext.Provider>
  );
};

export const useSnackBar = (): SnackBarContextActions => {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error("useSnackBar must be used within an SnackBarProvider");
  }

  return context;
};
