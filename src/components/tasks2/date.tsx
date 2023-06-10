import { Box } from "@mui/system";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "due in %s",
    past: "due %s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

const TaskDate = ({ taskdue }: { taskdue: Date }) => {
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const due = dayjs(taskdue).format("YYYY-MM-DD");

  return (
    <Box>
      {dayjs(today).isSame(due)
        ? "due today"
        : dayjs(due).isAfter(today)
        ? dayjs(today).to(due)
        : dayjs(due).from(today)}
    </Box>
  );
};

export default TaskDate;

/**
 * Breaking down the chained turnary:
 * 
 * 
 * firstly checking for if the task is due today.
 * If it is not, it goes on to check if it due in the future or past due.
 * 
 *   {dayjs(today).isSame(due)
        ? "due today"
        : dayjs(due).isAfter(today)
        ? `due ${dayjs(today).to(due)}`
        : dayjs(due).from(today)}
 */

/**
 * examples:
 *
 * const today = dayjs(new Date()).format("YYYY-MM-DD");
 * const date = dayjs(task.due).format("YYYY/MM/DD");
 * const date2 = dayjs(task.due).format("YYYY-MM-DD");
 * dayjs(task.due).isAfter(today)
 * dayjs(today).to(date)
 * dayjs(date).from(today)
 */
