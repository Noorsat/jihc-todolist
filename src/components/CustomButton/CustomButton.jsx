import { Button } from "antd"

export const CustomButton = ( {type, text, onClick} ) => {
  return (
      <Button type={type} onClick={onClick}>{ text }</Button>
   )
}
