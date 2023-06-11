import { useTaskContext } from "../context/taskContext";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const DeleteTask = ({ taskid }: { taskid: number }) => {
  const { deleteTask } = useTaskContext();

  return (
    <Button
      variant="text"
      onClick={() => deleteTask(taskid)}
      sx={{
        color: "error.main",
        ":hover": { bgcolor: "error.main", color: "white" },
      }}
    >
      <ClearIcon />
    </Button>
  );
};

export default DeleteTask;
