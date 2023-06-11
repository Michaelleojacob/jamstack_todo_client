import {
  ListItem,
  Accordion,
  AccordionDetails,
  ThemeProvider,
  Box,
} from "@mui/material";
import { TaskCard2Props } from "../../types/types";
import customAccordionTheme from "../../mui_styles/customAccordion";
import TaskCardAccordionSummary from "./accordionSummary";
import TaskCardAccordionDetails from "./accordionDetails";

const TaskCard2 = ({
  task,
  expanded,
  handleChange,
  handleClose,
}: TaskCard2Props) => {
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

          {/* all details go here */}
          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
            <TaskCardAccordionDetails task={task} />
          </Box>
        </Accordion>
      </ThemeProvider>
    </ListItem>
  );
};

export default TaskCard2;

// const TaskCard2 = ({
//   task,
//   expanded,
//   handleChange,
//   handleClose,
// }: TaskCard2Props) => {
//   const handleAccordionDetailsClick = () => handleClose();

//   return (
//     <ListItem disablePadding>
//       <ListItemButton
//         sx={
//           expanded === task.id
//             ? {
//                 width: "100%",
//                 borderTop: "1px solid black",
//                 borderBottom: "1px solid black",
//               }
//             : {
//                 maxHeight: "50px",
//                 width: "100%",
//               }
//         }
//       >
//         <ThemeProvider theme={customAccordionTheme}>
//           <Accordion
//             sx={
//               expanded !== task.id
//                 ? { maxHeight: "50px", width: "100%" }
//                 : { width: "100%" }
//             }
//             expanded={expanded === task.id}
//             onChange={handleChange(task.id)}
//           >
//             <AccordionSummary>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <div>{task.title}</div>
//                 <div onClick={(e) => e.stopPropagation()}>
//                   <button>
//                     <EditIcon />
//                   </button>
//                   <button>del</button>
//                 </div>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails onClick={handleAccordionDetailsClick}>
//               <TaskPrio prio={task.prio} />
//             </AccordionDetails>
//             <AccordionDetails onClick={handleAccordionDetailsClick}>
//               {task.due ? <TaskDate taskdue={task.due} /> : null}
//             </AccordionDetails>
//           </Accordion>
//         </ThemeProvider>
//       </ListItemButton>
//     </ListItem>
//   );
// };
