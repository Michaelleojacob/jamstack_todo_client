import { useProjectContext } from "../../../context/projectContext/projectContext";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ProjectDropdown = ({
  project,
  handleChange,
}: {
  project: "" | number;
  handleChange: (e: any) => void;
}) => {
  const { projects } = useProjectContext();

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>project</InputLabel>
        <Select
          value={project}
          label="project"
          onChange={handleChange}
          name="project"
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

// const ProjectDropdown = () => {
//   const [age, setAge] = useState("");

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };
