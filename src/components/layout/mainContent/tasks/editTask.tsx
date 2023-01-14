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
import { DatePickerDeskTop, DatePickerMobile } from "../../../utils/datePicker";
import { UpdateTodo, Todo } from "../../../../types/types";
import { useTaskContext } from "../../../context/taskContext/tasks";
import ProjectDropdown from "./projectDropdown";
import { useProjectContext } from "../../../context/projectContext/projectContext";
import EditIcon from "@mui/icons-material/Edit";

const EditTaskModal = ({ editTask }: { editTask: Todo }) => {
  const { updateTask } = useTaskContext();
  const { activeProject } = useProjectContext();

  const [task, setTask] = useState<UpdateTodo>({
    title: "",
    desc: "",
    prio: "",
    due: null,
    projectId: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    const data = await updateTask(editTask.id, task);
    console.log(data);
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
  const clearTask = () =>
    setTask({ title: "", desc: "", prio: "", due: null, projectId: "" });

  useEffect(() => {
    setTask((prevState) => ({ ...prevState, projectId: activeProject }));
  }, [activeProject]);

  useEffect(() => {
    if (open === true) {
      setTask({
        title: editTask.title,
        desc: editTask.desc || "",
        due: editTask.due || null,
        prio: editTask.prio || "",
        projectId: editTask.projectId || "",
      });
    }
  }, [open]);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <DialogTitle>Create Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="title"
              name="title"
              fullWidth
              variant="standard"
              value={task.title}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              label="desc"
              name="desc"
              fullWidth
              variant="standard"
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
            <Button type="submit">Create</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default EditTaskModal;
