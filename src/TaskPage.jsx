import Container from "./Container";
import React from "react";
import H1 from "./H1";
import TaskRow from "./TaskRow";
import TaskCard from "./TaskCard";

import H2 from "./H2";
import Button from "./Button";

function TaskPage(props) {
  const [taskCardVisible, setTaskcardVisiblity] = React.useState(false);
  const [taskList, setTaskList] = React.useState([]);

  const [completedTask, setCompletedTask] = React.useState(["done1", "done2"]);

  console.log("taskList", taskList);
  console.log("dateTimeValue", dateTimeValue);

  const showTaskCard = () => setTaskcardVisiblity(true);
  const hideTaskCard = () => setTaskcardVisiblity(false);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const markAsDone = (task) => {
    const newTaskList = taskList.filter((t) => t !== task);
    setTaskList(newTaskList);
    setCompletedTask(...completedTask, task);
  };
  const markAsNotDone = (task) => {
    const newCompletedTask = completedTask.filter((t) => t !== task);
    setCompletedTask(newCompletedTask);
    setTaskList(...taskList, task);
  };

  return (
    <Container>
      <H1>Tasks to get done</H1>
      <H2>Task to do</H2>

      {taskList.map((t) => (
        <TaskRow done={false} key={t} onStatusChange={markAsDone}>
          {t}
        </TaskRow>
      ))}

      {!taskCardVisible && (
        <Button theme="radius" icon="+" onClick={showTaskCard}>
          Add a task
        </Button>
      )}
      {taskCardVisible && (
        <TaskCard onClose={hideTaskCard} onCreate={addTask} />
      )}

      {completedTask.map((t) => (
        <TaskRow done={true} key={t} onStatusChange={markAsNotDone}>
          {t}
        </TaskRow>
      ))}
    </Container>
  );
}

export default TaskPage;
