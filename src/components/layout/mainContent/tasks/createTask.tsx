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
import { CreateTodo } from "../../../../types/types";

const CreateTaskModal = () => {
  const [task, setTask] = useState<CreateTodo>({
    title: "",
    desc: "",
    prio: "",
    due: null,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi");
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
    console.log(task);
  }, [task]);
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        create task
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
              required
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
              />
              <FormControlLabel
                name="prio"
                value="medium"
                control={<Radio color="warning" />}
                label="medium"
              />
              <FormControlLabel
                name="prio"
                value="high"
                control={<Radio color="error" />}
                label="high"
              />
            </RadioGroup>
            <DatePickerDeskTop value={task.due} updateDue={updateDue} />
            <DatePickerMobile value={task.due} updateDue={updateDue} />
            <Button onClick={clearDue}>clear date</Button>
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

export default CreateTaskModal;
