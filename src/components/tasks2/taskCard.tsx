import { Todo } from "../../types/types";
import {
  ListItemIcon,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ThemeProvider,
  createTheme,
  ListItemButton,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import TaskDate from "./date";
import { TaskCard2Props } from "../../types/types";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: 0,
          borderRadius: 0,
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 0,
        },
      },
    },
  },
});

const TaskCard2 = ({ task, expanded, handleChange }: TaskCard2Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={
          expanded !== task.id
            ? { maxHeight: "50px", width: "100%" }
            : { width: "100%" }
        }
      >
        <ThemeProvider theme={theme}>
          <Accordion
            sx={
              expanded !== task.id
                ? { maxHeight: "50px", width: "100%" }
                : { width: "100%" }
            }
            expanded={expanded === task.id}
            onChange={handleChange(task.id)}
          >
            <AccordionSummary>
              <ListItemIcon>
                <CircleIcon />
              </ListItemIcon>
              <div>{task.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>{task.due ? <TaskDate taskdue={task.due} /> : null}</div>
            </AccordionDetails>
          </Accordion>
        </ThemeProvider>
      </ListItemButton>
    </ListItem>
  );
};

export default TaskCard2;

// const TaskCard2 = ({ task }: { task: Todo }) => {
//   return (
//     <Box sx={{ display: "grid" }}>
//       {task.prio ? <div>{task.prio}</div> : null}
//       <div>{task.title}</div>
//       <div>{task.prio}</div>
//       <div>{task.due ? <TaskDate taskdue={task.due} /> : null}</div>
//     </Box>
//   );
// };
