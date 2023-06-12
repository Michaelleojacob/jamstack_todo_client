import dayjs from "dayjs";

const CreatedAt = ({ date }: { date: Date | undefined }) => {
  const formattedDate = dayjs(date).format("MMMM DD, YYYY");
  return <div>created at: {formattedDate}</div>;
};

export default CreatedAt;
