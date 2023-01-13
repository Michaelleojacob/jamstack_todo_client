import { Todo } from "../../../../types/types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import CheckIcon from "@mui/icons-material/Check";
import { useTaskContext } from "../../../context/taskContext/tasks";

const TaskCard = ({ task }: { task: Todo }) => {
  const { deleteTask } = useTaskContext();
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {task.title}
          </Typography>
          {task.project ? (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              project: "{task.project.title}"
            </Typography>
          ) : null}

          <Typography>{task.due ? task.due.toString() : null}</Typography>
          <Typography variant="body2">{task.desc}</Typography>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                {task.prio === "low" ? (
                  <CircleIcon fontSize="medium" color="success" />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="medium" />
                )}
              </Box>
              <Box>
                {task.prio === "medium" ? (
                  <CircleIcon fontSize="medium" color="warning" />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="medium" />
                )}
              </Box>
              <Box>
                {task.prio === "high" ? (
                  <CircleIcon fontSize="medium" color="error" />
                ) : (
                  <RadioButtonUncheckedIcon fontSize="medium" />
                )}
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <CardActions>
                <Button variant="outlined" color="success">
                  <CheckIcon fontSize="medium" color="success" />
                </Button>
                <Button variant="outlined">
                  <EditIcon fontSize="medium" />
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  <ClearIcon color="error" fontSize="medium" />
                </Button>
              </CardActions>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskCard;
