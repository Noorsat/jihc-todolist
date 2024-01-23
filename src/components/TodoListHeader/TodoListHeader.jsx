import { useState } from 'react';
import styles from './TodoListHeader.module.css';
import { notification } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CustomModal } from '../CustomModal/CustomModal';

export const TodoListHeader = ({ addTask, searchTaskHandler, searchTasks}) => {
    const [taskInput, setTaskInput] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

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
                setModalOpen(true);
            }else{
                notification["warning"]({
                    message: "you need switch off search mode"
                })
            }
        }
    }

    const addTaskModalHandler = (color) => {
        const newTask = {
            title: taskInput,
            id: new Date(),
            isEdit: false,
            isDone: false,
            color: color
        }
        
        addTask(newTask);
        setTaskInput("");
        setModalOpen(false);
    }


  return (
    <div className={styles.todolist__header}>
        <CustomModal 
            title="Add task" 
            open={modalOpen}
            onOk={addTaskModalHandler}
            onCancel={() => setModalOpen(false)}
        />
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
