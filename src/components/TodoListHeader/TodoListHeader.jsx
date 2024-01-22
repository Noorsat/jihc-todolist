import { useState } from 'react';
import styles from './TodoListHeader.module.css';
import { notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const TodoListHeader = ({ addTask, searchTaskHandler, searchTasks}) => {
    const [taskInput, setTaskInput] = useState("");

    const taskInputChangeHandler = (text) => {
        setTaskInput(text);
    }

    const addTaskHandler = (e) => {
        e.preventDefault();
        if (taskInput.trim().length == 0){
            notification["error"]({
                message: "Please, fill the input field"
            })
        }else{
            if (searchTasks.length == 0){
                const newTask = {
                    title: taskInput,
                    id: new Date(),
                    isEdit: false,
                    isDone: false
                }
                
                addTask(newTask);
                setTaskInput("");
            }else{
                notification["warning"]({
                    message: "you need switch off search mode"
                })
            }
        }
    }

  return (
    <div className={styles.todolist__header}>
        <form onSubmit={addTaskHandler}>
            <div className={styles.todolist__header_input}>
                <input type="text" onChange={(e) => taskInputChangeHandler(e.target.value)} value={taskInput} />
            </div>
            <div className={styles.todolist__header_button}>
                <button type='submit'>
                    Add task
                </button>
            </div>
        </form>
        <div className={styles.todolist__header_search} onClick={() => searchTaskHandler(taskInput)}>
            <SearchOutlined
                style={{color: "#0077ff"}}
            />
        </div>
    </div>
  )
}
