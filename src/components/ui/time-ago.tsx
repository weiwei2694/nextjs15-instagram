import { formatDistanceToNow } from "date-fns";

const TimeAgo = ({ date, className }: { date: string; className?: string }) => {
  return (
    <span className={`${className || ""}`}>
      {formatDistanceToNow(new Date(date), { addSuffix: true })}
    </span>
  );
};

export default TimeAgo;
