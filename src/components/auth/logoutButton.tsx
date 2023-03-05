import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutIcon from "@mui/icons-material/Logout";
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
      <Button
        variant="text"
        onClick={handleClickOpen}
        sx={{
          bgcolor: "primary.dark",
          color: "text.primary",
          ":hover": { bgcolor: "primary.main", color: "text.primary" },
        }}
      >
        <LogoutIcon fontSize="large" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableScrollLock={true}
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
