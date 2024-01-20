import { Form, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { ReusableSelectInput, ReusableTextField } from "..";
import { todoDetailType } from "../../types/todoType";
import { Button, SelectChangeEvent } from "@mui/material";
import { useTodos } from "../../context/TodoProvider";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const categoryOptions = [
  { value: "daily", text: "Daily" },
  { value: "event", text: "Event" },
  { value: "personal", text: "Personal" },
  { value: "planned", text: "Planned" },
  { value: "shopping", text: "Shopping" },
  { value: "work", text: "Work" },
];
const FormAddTaskContent: React.FC = () => {
  const { category } = useParams();
  const { values, setFieldValue } = useFormikContext<todoDetailType>();
  const { setTodos, onEditing, setOnEditing } = useTodos();
  const handleChangeCategory = (e: SelectChangeEvent) => {
    setFieldValue("category", e.target.value as string);
  };

  useEffect(() => {
    if (category) {
      setFieldValue("category", category);
    }
  }, [category]);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(!values.name){
      setFieldValue("name","blank task for quick test!!")
    }
    if (onEditing) {
      setTodos((prevTodos) => ({
        ...prevTodos,
        [values.category]: prevTodos[values.category].map((item) =>
          item.id === onEditing.id ? { ...item, ...values } : item
        ),
      }));
      setOnEditing(null);
    } else {
      const obj = { ...values };
      obj["id"] = uuidv4();
      setTodos((prevTodos) => ({
        ...prevTodos,
        [values.category]: [...prevTodos[values.category], obj],
      }));
    }
  };

  useEffect(() => {
    if (onEditing) {
      setFieldValue("name", onEditing.name);
      setFieldValue("hour", onEditing.hour);
      setFieldValue("minute", onEditing.minute);
      setFieldValue("category", onEditing.category);
    }
  }, [onEditing]);

  return (
    <Form
      onSubmit={(e) => onSubmit(e)}
      className={`py-20 px-12 ${
        onEditing ? "bg-lightBlue" : "bg-lightGreen"
      } rounded-2xl`}
    >
      <div className="bg-white rounded-2xl px-8 py-12 ">
        <div className="grid grid-cols-4 md:grid-cols-6 md:gap-4 gap-4">
          <div className="col-span-4 md:col-span-3">
            <ReusableTextField
              name="name"
              label="Task name"
              color="primary"
              focused
              placeholder="New Task Name"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <ReusableSelectInput
              label="Category"
              name="category"
              disabled={category ? true : false}
              value={values.category}
              options={categoryOptions}
              onChange={handleChangeCategory}
            />
          </div>
          <ReusableTextField name="hour" label="Hour" color="primary" focused />
          <ReusableTextField
            name="minute"
            label="Minute"
            color="primary"
            focused
          />
        </div>
        <div className="my-8 flex justify-center">
          <Button
            type="submit"
            variant="contained"
            color={onEditing ? "info" : "primary"}
            className="w-1/2 md:w-1/4"
          >
            {onEditing ? "Complete Edit" : "Add Task"}
          </Button>
          {onEditing ? (
            <div className="ml-12 w-1/2 md:w-1/4">
              <Button
                type="button"
                variant="outlined"
                color="error"
                fullWidth
                onClick={() => setOnEditing(null)}
              >
                Cancel
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

export default FormAddTaskContent;
