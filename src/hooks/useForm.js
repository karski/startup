// ! From: https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms/
// ! use const { values, handleChange, handleSubmit } = useForm(callbackFunction, i.e formSubmit); in your component

import { useState } from "react";

const useForm = (callback, formValues = {}) => {
  const [values, setValues] = useState(formValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  const resetForm = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    values,
    resetForm
  };
};

export default useForm;
