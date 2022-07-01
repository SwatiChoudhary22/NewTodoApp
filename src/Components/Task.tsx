import { FC, memo } from "react";
import cn from "classnames";
import TaskModal from "../Modals/Task";
type TaskProps = {
  task: TaskModal;
};

const Task: FC<TaskProps> = ({ task }) => {
  const { title, done } = task;
  return (
    <div className="flex items-center">
      <input className="rounded-md" type="checkbox" checked={done} />
      <p className={cn("ml-2", { "line-through": done })}>{title}</p>
    </div>
  );
};

Task.defaultProps = {};

export default memo(Task);
