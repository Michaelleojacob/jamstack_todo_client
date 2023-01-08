import { useState, FormEvent, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import { useProjectContext } from "../../context/projectContext/projectContext";

const CreateProjectDialog = ({ closeBurger }: { closeBurger: () => void }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { createProject, changeActiveProject } = useProjectContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const res = await createProject(title);
    if (res.succ) {
      setTitle("");
      changeActiveProject(res.project.id);
      closeBurger();
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
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClickOpen}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary={"add project"} />
          </ListItemButton>
        </ListItem>
      </List>
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
