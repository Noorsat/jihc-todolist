import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__wrapper}>
            <ul>
                <li>
                    <NavLink to="/"> 
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/todolist"> 
                        TodoList
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/news"> 
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter"> 
                        Counter
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
