import { Input } from "antd"

export const CustomInput = ( { type, placeholder, value, onChange, width = 400 } ) => {
  return (
    <Input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ width: width }}
    />
  )
}
