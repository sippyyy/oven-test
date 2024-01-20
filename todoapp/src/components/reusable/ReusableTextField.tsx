import React from "react";
import TextField from "@mui/material/TextField";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  color:"primary" | "secondary" | "error"
  borderColor?: string;
  flex1?: boolean;
  id?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  focused?:boolean
  placeholder?:string
}

const ReusableTextField: React.FC<Props> = ({
  name,
  label,
  flex1,
  id,
  value,
  type,
  disabled,
  focused,
  ...props
}) => {
  const [field] = useField({ ...props, name, value, type, disabled });

  return (
    <TextField
    fullWidth
      disabled={disabled}
      id={id ? id : "custom-css-standard-input"}
      type={type ? type : "text"}
      sx={{
        flex: flex1 ? 1 : "",
      }}
      {...field}
      {...props}
      label={label}
      focused={focused}
    />
  );
};

export default ReusableTextField;