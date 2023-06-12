import { ListItem, Accordion, ThemeProvider, Box } from "@mui/material";
import { TaskCardProps } from "../../types/types";
import customAccordionTheme from "../../mui_styles/customAccordion";
import TaskCardAccordionSummary from "./accordionSummary";
import TaskCardAccordionDetails from "./accordionDetails";

const TaskCard = ({
  task,
  expanded,
  handleChange,
  handleClose,
}: TaskCardProps) => {
  return (
    <ListItem disablePadding>
      <ThemeProvider theme={customAccordionTheme}>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: expanded === task.id ? "#515151" : "inherit",
          }}
          expanded={expanded === task.id}
          onChange={handleChange(task.id)}
        >
          <TaskCardAccordionSummary task={task} />

          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
            <TaskCardAccordionDetails task={task} />
          </Box>
        </Accordion>
      </ThemeProvider>
    </ListItem>
  );
};

export default TaskCard;
