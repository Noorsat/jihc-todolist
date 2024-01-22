import styles from './TodoListBody.module.css';
import { TodoListItem } from '../TodoListItem/TodoListItem'

export const TodoListBody = ({ tasks, doneChangeHandler, editChangeHandler, deleteTaskHandler, editTextHandler }) => {
  return (
    <div className={styles.todolist__body}>
        {   
            tasks.length == 0 
            ?
            <div className={styles.todolist__body_warning}>Empty...</div>
            :
            tasks.map(task => (
                <TodoListItem 
                  task={task} 
                  doneChangeHandler={doneChangeHandler}
                  editChangeHandler={editChangeHandler}
                  deleteTaskHandler={deleteTaskHandler}
                  editTextHandler={editTextHandler}
                />
            ))
        }
    </div>
  )
}
