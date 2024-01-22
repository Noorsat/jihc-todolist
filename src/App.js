import { useEffect, useState } from "react";
import { TodoListBody } from "./components/TodoListBody/TodoListBody";
import { TodoListHeader } from "./components/TodoListHeader/TodoListHeader";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [searchTasks, setSearchTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (task) => {
    setTasks([task, ...tasks]);
  };

  const doneChangeHandler = (id) => {
    const doneTask = tasks.filter((task) => task.id == id)[0];
    doneTask.isDone = !doneTask.isDone;

    if (doneTask.isDone) {
      setTasks([...tasks.filter((task) => task.id != id), doneTask]);
    } else {
      setTasks(
        [...tasks.filter((task) => task.id != id), doneTask].sort(
          (a, b) => b.id - a.id
        )
      );
    }
  };

  const editChangeHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          task.isEdit = !task.isEdit;
        }
        return task;
      })
    );
  };

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const editTextHandler = (id, newTitle) => {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          task.title = newTitle;
        }
        return task;
      })
    );
  };

  const searchTaskHandler = (title) => {
    if (title.trim().length > 0) {
      setSearchTasks(tasks.filter((task) => task.title.includes(title)));
    } else {
      setSearchTasks([]);
    }
  };

  console.log("end of the day");
  console.log("end of the second day");
  console.log("end of the third day");

  return (
    <div className="App">
      <div>
        <TodoListHeader
          addTask={addTaskHandler}
          searchTaskHandler={searchTaskHandler}
          searchTasks={searchTasks}
        />
        <TodoListBody
          tasks={searchTasks.length > 0 ? searchTasks : tasks}
          doneChangeHandler={doneChangeHandler}
          editChangeHandler={editChangeHandler}
          deleteTaskHandler={deleteTaskHandler}
          editTextHandler={editTextHandler}
        />
      </div>
    </div>
  );
}

export default App;
