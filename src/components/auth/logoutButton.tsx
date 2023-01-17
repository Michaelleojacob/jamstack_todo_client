import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppContext } from "../context/appContext";

const LogoutDialog = () => {
  const [open, setOpen] = useState(false);
  const { signout } = useAppContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmLogout = () => {
    signout();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AccountCircleIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"confirm logout"}</DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            cancel
          </Button>
          <Button variant="outlined" onClick={confirmLogout}>
            log out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;
