import { Snackbar } from "@mui/material";
import { Alert, AlertColor } from "@mui/material";
import { createContext, useContext, ReactNode, useState } from "react";

interface SnackBarContextActions {
  showSnackBar: (text: string, typeColor: AlertColor) => void;
}

export const SnackBarContext = createContext({} as SnackBarContextActions);

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [typeColor, setTypeColor] = useState<AlertColor>("info");

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
