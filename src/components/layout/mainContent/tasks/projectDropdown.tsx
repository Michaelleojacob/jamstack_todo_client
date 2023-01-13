import { useProjectContext } from "../../../context/projectContext/projectContext";
import { FormControl, Box, InputLabel, MenuItem, Select } from "@mui/material";

const ProjectDropdown = ({
  project,
  handleChange,
}: {
  project: "" | number;
  handleChange: (e: any) => void;
}) => {
  const { projects, activeProject } = useProjectContext();

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>project</InputLabel>
        <Select
          value={project}
          label="project"
          onChange={handleChange}
          name="project"
          defaultValue={project}
        >
          {projects && projects.length
            ? projects.map((proj) => (
                <MenuItem key={`${proj.id}_${proj.createdAt}`} value={proj.id}>
                  {proj.title}
                </MenuItem>
              ))
            : null}
          <MenuItem value={""}>none</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProjectDropdown;
