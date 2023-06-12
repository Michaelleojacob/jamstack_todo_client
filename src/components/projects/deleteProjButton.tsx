import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useProjectContext } from "../context/projectContext";
import { useSnackBar } from "../context/snackbarContext";

const DeleteProjectButton = ({ id }: { id: number }) => {
  const { deleteProject } = useProjectContext();
  const { showSnackBar } = useSnackBar();

  const handleDelete = async () => {
    const res = await deleteProject(id);
    if (res.succ) showSnackBar("project deleted", "warning");
  };
  return (
    <Button
      onClick={handleDelete}
      variant="text"
      sx={{
        p: "0.5",
        color: "error.dark",
        ":hover": { bgcolor: "error.dark", color: "text.primary" },
      }}
    >
      <ClearIcon />
    </Button>
  );
};

export default DeleteProjectButton;
