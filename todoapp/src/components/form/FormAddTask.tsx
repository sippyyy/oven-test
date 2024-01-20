import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FormAddTaskContent from "./FormAddTaskContent";
import { Category } from "../../types/todoType";

interface FormValues {
  name: string;
  hour: string;
  minute: string;
  category: Category;
}

const FormAddTask: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        hour: "00",
        minute: "00",
        category:"daily",
      }}
      onSubmit={(values: FormValues) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("This field is required"),
        hour: Yup.string().required("This field is required"),
        minute: Yup.string().required("This field is required"),
        category: Yup.mixed<Category>().required("This field is required"),
      })}
    >
      <FormAddTaskContent />
    </Formik>
  );
};

export default FormAddTask;
