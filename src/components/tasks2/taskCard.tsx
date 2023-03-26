import { Todo } from "../../types/types";
import { Box } from "@mui/system";
import dayjs from "dayjs";

const TaskCard2 = ({ task }: { task: Todo }) => {
  const today = new Date();
  const date = dayjs(task.due).format("YYYY/MM/DD");
  const date2 = dayjs(task.due).format("YYYY-MM-DD");
  console.log(today, date, date2);
  return (
    <Box>
      <div>{task.title}</div>
      {task.due ? <div>{dayjs(task.due).format("DD/MM/YYYY")}</div> : null}
      {/* {task.due ? <div>{dayjs(new Date()).to(date)}</div> : null} */}
    </Box>
  );
};

export default TaskCard2;
