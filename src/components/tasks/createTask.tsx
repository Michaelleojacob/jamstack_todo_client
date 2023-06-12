import { useState, FormEvent, ChangeEvent, useRef } from "react";
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
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { DatePickerDeskTop, DatePickerMobile } from "../utils/datePicker";
import { CreateTodo } from "../../types/types";
import { useTaskContext } from "../context/taskContext";
import ProjectDropdown from "../projects/projectDropdown";
import { useProjectContext } from "../context/projectContext";
import { useSnackBar } from "../context/snackbarContext";

const CreateTaskModal = () => {
  const { createTask } = useTaskContext();
  const { activeProject } = useProjectContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const { showSnackBar } = useSnackBar();

  const [task, setTask] = useState<CreateTodo>({
    title: "",
    desc: "",
    prio: 0,
    due: null,
    projectId: "",
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    clearTask();
    setOpen(true);
    setTimeout(() => {
      inputRef.current!.focus();
    }, 200);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.title.trim() === "") return;
    const data = await createTask(task);
    if (data.succ) {
      handleClose();
      showSnackBar("task created", "success");
    }
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

  const clearTask = () => {
    setTask({
      title: "",
      desc: "",
      prio: 0,
      due: null,
      projectId: activeProject,
    });
  };

  return (
    <Box>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleOpen}
          sx={{
            minHeight: "50px",
            "&:hover": {
              backgroundColor: "#515151",
            },
          }}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          create task
        </ListItemButton>
      </ListItem>
      <Dialog open={open} onClose={handleClose}>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DialogTitle>Create Task</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              autoFocus
              margin="dense"
              label="title"
              name="title"
              fullWidth
              variant="outlined"
              required
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
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <RadioGroup
                onChange={handleChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
                />
                <FormControlLabel
                  name="prio"
                  value={2}
                  control={<Radio color="warning" />}
                  label="medium"
                />
                <FormControlLabel
                  name="prio"
                  value={3}
                  control={<Radio color="error" />}
                  label="high"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ display: "flex" }}>
              <DatePickerDeskTop value={task.due} updateDue={updateDue} />
              <Button variant="outlined" onClick={clearDue}>
                clear date
              </Button>
            </Box>
            {/* <DatePickerMobile value={task.due} updateDue={updateDue} /> */}
            <ProjectDropdown
              project={task.projectId}
              handleChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default CreateTaskModal;
