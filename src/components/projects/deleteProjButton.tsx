import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useProjectContext } from "../context/projectContext";

const DeleteProjectButton = ({ id }: { id: number }) => {
  const { deleteProject } = useProjectContext();
  return (
    <Button onClick={() => deleteProject(id)} variant="text" color="error">
      <ClearIcon color="error" />
    </Button>
  );
};

export default DeleteProjectButton;
