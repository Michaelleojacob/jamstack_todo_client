import { useState, FormEvent, ChangeEvent, useEffect, useRef } from "react";
import {
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { DatePickerDeskTop, DatePickerMobile } from "../utils/datePicker";
import { UpdateTodo, Todo } from "../../types/types";
import { useTaskContext } from "../context/taskContext";
import ProjectDropdown from "../projects/projectDropdown";
import EditIcon from "@mui/icons-material/Edit";

const EditTaskModal = ({ editTask }: { editTask: Todo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <Button
        variant="text"
        onClick={handleOpen}
        sx={{
          color: "primary.light",
          ":hover": { bgcolor: "primary.light", color: "white" },
        }}
      >
        <EditIcon />
      </Button>
      {open ? (
        <Modal open={open} handleClose={handleClose} editTask={editTask} />
      ) : null}
    </Box>
  );
};

const Modal = ({
  open,
  handleClose,
  editTask,
}: {
  open: boolean;
  handleClose: () => void;
  editTask: Todo;
}) => {
  const { updateTask } = useTaskContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const [task, setTask] = useState<UpdateTodo>({
    title: "",
    desc: "",
    prio: 0,
    due: null,
    projectId: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await updateTask(editTask.id, task);
    if (data.succ) handleClose();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = name === "prio" ? Number(e.target.value) : e.target.value;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const updateDue = (newDate: any) => {
    if (newDate === undefined) return;
    if (newDate === null) return;
    setTask((prevState) => ({ ...prevState, due: newDate.$d }));
  };
  const clearDue = () => setTask((prevState) => ({ ...prevState, due: null }));

  useEffect(() => {
    setTask({
      title: editTask.title,
      desc: editTask.desc || "",
      due: editTask.due || null,
      prio: editTask.prio || 0,
      projectId: editTask.projectId || "",
    });
    setTimeout(() => {
      inputRef.current!.focus();
    }, 200);
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="title"
            name="title"
            fullWidth
            variant="outlined"
            value={task.title}
            onChange={handleChange}
            inputRef={inputRef}
          />
          <TextField
            autoFocus
            margin="dense"
            label="desc"
            name="desc"
            fullWidth
            variant="outlined"
            value={task.desc}
            onChange={handleChange}
          />
          <RadioGroup
            onChange={handleChange}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ p: "1rem" }}
          >
            <FormControlLabel
              name="prio"
              value={0}
              control={<Radio color="primary" />}
              label="none"
              checked={task.prio === 0}
            />
            <FormControlLabel
              name="prio"
              value={1}
              control={<Radio color="success" />}
              label="low"
              checked={task.prio === 1}
            />
            <FormControlLabel
              name="prio"
              value={2}
              control={<Radio color="warning" />}
              label="medium"
              checked={task.prio === 2}
            />
            <FormControlLabel
              name="prio"
              value={3}
              control={<Radio color="error" />}
              label="high"
              checked={task.prio === 3}
            />
          </RadioGroup>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <DatePickerDeskTop value={task.due} updateDue={updateDue} />
              {/* <DatePickerMobile value={task.due} updateDue={updateDue} /> */}
              <Button onClick={clearDue}>clear date</Button>
            </Box>
            <ProjectDropdown
              project={task.projectId}
              handleChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditTaskModal;
