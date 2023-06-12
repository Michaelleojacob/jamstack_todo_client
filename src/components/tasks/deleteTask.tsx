import { useTaskContext } from "../context/taskContext";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSnackBar } from "../context/snackbarContext";

const DeleteTask = ({ taskid }: { taskid: number }) => {
  const { deleteTask } = useTaskContext();
  const { showSnackBar } = useSnackBar();

  const handleDelete = async () => {
    const res = await deleteTask(taskid);
    if (res.succ) showSnackBar("task deleted", "warning");
    if (!res.succ) showSnackBar("task could not be deleted", "error");
  };

  return (
    <Button
      variant="text"
      onClick={handleDelete}
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
