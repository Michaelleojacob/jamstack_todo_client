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
import { EditProjectModalProps, Project } from "../../../types/types";

const EditProjectModal = ({ proj }: EditProjectModalProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      {open ? (
        <Modal open={open} handleClose={handleClose} proj={proj} />
      ) : null}
    </Box>
  );
};

const Modal = ({
  open,
  handleClose,
  proj,
}: {
  open: boolean;
  handleClose: () => void;
  proj: Project;
}) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateProject } = useProjectContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await updateProject(proj.id, title);
    handleClose();
  };

  useEffect(() => {
    setTitle(proj.title);
    setTimeout(() => {
      inputRef.current!.focus();
    }, 200);
  }, []);

  return (
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
  );
};

export default EditProjectModal;
