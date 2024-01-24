import { useState } from 'react'
import { CustomInput } from '../../components/CustomInput/CustomInput'
import styles from './Home.module.css';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({
    title:"",
    body:""
  })

  const onChangeHandler = (type, value) => {
    setData({...data, [type]: value});
  }

  const createPostHandler = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", data);
  }

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.form__wrapper}>
          <CustomInput 
            type="text"
            placeholder="Title..."
            value={data.title}
            onChange={(e) => onChangeHandler("title", e.target.value)}
          />
          <CustomInput 
            type="text"
            placeholder="Body..."
            value={data.body}
            onChange={(e) => onChangeHandler("body", e.target.value)}
          />
          <CustomButton
            type="primary"
            text="Create post"
            onClick={() => createPostHandler()}
          />
        </div>
      </form>
    </div>
  )
}

export default Home