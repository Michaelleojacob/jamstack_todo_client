import { useState, FormEvent, ChangeEvent, useEffect } from "react";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="outlined" onClick={handleOpen}>
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

  const [task, setTask] = useState<UpdateTodo>({
    title: "",
    desc: "",
    prio: "",
    due: null,
    projectId: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await updateTask(editTask.id, task);
    if (data.succ) handleClose();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      prio: editTask.prio || "",
      projectId: editTask.projectId || "",
    });
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
          >
            <FormControlLabel
              name="prio"
              value={""}
              control={<Radio color="primary" />}
              label="none"
              checked={task.prio === ""}
            />
            <FormControlLabel
              name="prio"
              value="low"
              control={<Radio color="success" />}
              label="low"
              checked={task.prio === "low"}
            />
            <FormControlLabel
              name="prio"
              value="medium"
              control={<Radio color="warning" />}
              label="medium"
              checked={task.prio === "medium"}
            />
            <FormControlLabel
              name="prio"
              value="high"
              control={<Radio color="error" />}
              label="high"
              checked={task.prio === "high"}
            />
          </RadioGroup>
          <DatePickerDeskTop value={task.due} updateDue={updateDue} />
          {/* <DatePickerMobile value={task.due} updateDue={updateDue} /> */}
          <Button onClick={clearDue}>clear date</Button>
          <ProjectDropdown
            project={task.projectId}
            handleChange={handleChange}
          />
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
