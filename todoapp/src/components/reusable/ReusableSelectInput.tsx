import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface ReusableSelectProps {
  label: string;
  value: string;
  name: string;
  disabled?: boolean;
  onChange: (e: SelectChangeEvent) => void;
  options: {
    value: string | number;
    text: string | number;
  }[];
}

const ReusableSelectInput: React.FC<ReusableSelectProps> = (props) => {
  const { label, value, name, onChange, options, disabled } = props;
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        disabled={disabled}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value ? value : ""}
        name={name}
        label={label}
        onChange={onChange}
        sx={{ width: "100%" }}
        color="primary"
      >
        {options?.map((option) => (
          <MenuItem key={option.text} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ReusableSelectInput;
