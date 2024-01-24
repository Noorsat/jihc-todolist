import { useDispatch, useSelector } from "react-redux"
import { CustomButton } from "../../components/CustomButton/CustomButton"
import styles from './Counter.module.css'
import { DECREMENT, INCREMENT } from "../../types/types";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { useState } from "react";

export const Counter = () => { 
    const [number, setNumber] = useState("");
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

  return (
    <div className={styles.buttons}>
        <CustomInput
            type="number"
            placeholder="Number..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            width={70}
        />
        <CustomButton
            type="primary"
            text="-"
            onClick={() => dispatch({ type: DECREMENT, payload: number.length > 0 ? Number(number) : 1})}
        />
        {count}
        <CustomButton
            type="primary"
            text="+"
            onClick={() => dispatch({ type: INCREMENT, payload: number.length > 0 ? Number(number) : 1 })}
        />
    </div>
  )
}
