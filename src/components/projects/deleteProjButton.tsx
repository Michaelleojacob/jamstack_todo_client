import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useProjectContext } from "../context/projectContext";

const DeleteProjectButton = ({ id }: { id: number }) => {
  const { deleteProject } = useProjectContext();
  return (
    <Button
      onClick={() => deleteProject(id)}
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
