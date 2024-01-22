import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import styles from './TodoListItem.module.css';
import { Checkbox, message, Popconfirm } from 'antd';


export const TodoListItem = ({ task, doneChangeHandler, editChangeHandler, deleteTaskHandler, editTextHandler }) => {
  return (
    <div className={styles.todolist__item}>
      <div className={styles.todolist__item_content}>
        <div className={styles.todolist__item_checkbox}>
          <Checkbox onChange={() => doneChangeHandler(task.id)} checked={task.isDone} />
        </div>
        {
          task.isEdit ? 
          <form onSubmit={() => editChangeHandler(task.id)}>
            <input type="text" placeholder='Edit task...' value={task.title} onChange={(e) => editTextHandler(task.id, e.target.value)} className={styles.todolist__item_input} />
          </form>
          :
          <div className={`${styles.todolist__item_task} ${task.isDone ? styles.todolist__item_task_done : ''}`}>
            { task.title }
          </div>
        }
     
      </div>
      <div className={styles.todolist__item_icons}>
        <div className={styles.todolist__item_icon} onClick={() => editChangeHandler(task.id)}>
          <EditOutlined 
            style={{
              color: "#0077ff"
            }}
          />
        </div>
        <div className={styles.todolist__item_icon}>
        <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => deleteTaskHandler(task.id)}
            onCancel={() => message.error('Click on No')}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined 
              style={{
                color: "#0077ff"
              }}
            />
          </Popconfirm>
        </div>
      </div>
    </div>
  )
}
