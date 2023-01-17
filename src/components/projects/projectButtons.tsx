import { Project } from "../../types/types";
import { Box } from "@mui/material";
import EditProjectModal from "./editProj";

const ProjectListButtons = ({ proj }: { proj: Project }) => {
  return (
    <Box>
      <EditProjectModal proj={proj} />
    </Box>
  );
};

export default ProjectListButtons;
