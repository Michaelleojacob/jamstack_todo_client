import { useState, FormEvent, useRef } from "react";
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
import { useProjectContext } from "../../context/projectContext/projectContext";

const CreateProjectDialog = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { createProject } = useProjectContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const res = await createProject(title);
    if (res.succ) {
      setTitle("");
      setOpen(false);
    }
    setLoading(false);
    return;
  };

  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current!.focus();
    }, 200);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        + p
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <DialogTitle>Create project</DialogTitle>
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
              create
            </LoadingButton>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default CreateProjectDialog;
