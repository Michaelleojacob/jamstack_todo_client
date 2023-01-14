import { useState, useEffect, FormEvent, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import EditIcon from "@mui/icons-material/Edit";
import { useProjectContext } from "../../context/projectContext/projectContext";
import { EditProjectModalProps } from "../../../types/types";

const EditProjectModal = ({
  id,
  prevTitle,
  closeBurger,
}: EditProjectModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateProject } = useProjectContext();

  console.log("hi");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await updateProject(id, title);
    console.log(res);
    // closeBurger();
    handleClose();
    setTitle("");
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTitle(prevTitle);
    setTimeout(() => {
      inputRef.current!.focus();
    }, 200);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle("");
  };

  return (
    <Box>
      <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <DialogTitle>update project</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              value={title}
              onChange={handleChange}
              focused
              autoFocus={true}
              inputRef={inputRef}
              required
            />
          </DialogContent>
          <DialogActions>
            <LoadingButton
              loading={loading}
              onClick={handleClose}
              variant="contained"
            >
              Cancel
            </LoadingButton>
            <LoadingButton type="submit" loading={loading} variant="contained">
              update
            </LoadingButton>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default EditProjectModal;
