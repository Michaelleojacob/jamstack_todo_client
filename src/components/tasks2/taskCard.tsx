import {
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ThemeProvider,
  ListItemButton,
} from "@mui/material";
import TaskDate from "./date";
import { TaskCard2Props } from "../../types/types";
import customAccordionTheme from "../../mui_styles/customAccordion";
import TaskPrio from "./prio";

const TaskCard2 = ({
  task,
  expanded,
  handleChange,
  handleClose,
}: TaskCard2Props) => {
  const handleAccordionDetailsClick = () => handleClose();

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={
          expanded !== task.id
            ? {
                maxHeight: "50px",
                width: "100%",
              }
            : {
                width: "100%",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }
        }
      >
        <ThemeProvider theme={customAccordionTheme}>
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
              <div>{task.title}</div>
            </AccordionSummary>
            <AccordionDetails onClick={handleAccordionDetailsClick}>
              <TaskPrio prio={task.prio} />
            </AccordionDetails>
            <AccordionDetails onClick={handleAccordionDetailsClick}>
              {task.due ? <TaskDate taskdue={task.due} /> : null}
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
