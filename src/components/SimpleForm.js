import classes from "./SimpleForm.module.css";
import { useState } from "react";

const SimpleForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputInvalid = !enteredEmailIsValid && enteredMailTouched;


  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlur = () => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (e)=>{
    setEnteredEmail(e.target.value)
  };
  const emailInputBlur =() =>{
    setEnteredMailTouched(true)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName === "") {
      return;
    }
    setEnteredName("");
    console.log(enteredName);
    setEnteredNameTouched(false);

    setEnteredEmail("");
    console.log(enteredEmail)
    setEnteredMailTouched(false);
  };

  //const nameInputInvalid = !enteredNameIsValid && enteredNameTouched

  const nameValidityClass = nameInputInvalid ? classes.invalid : "";
  const emailValidityClass = emailInputInvalid? classes.invalid :"";


  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={nameValidityClass}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlur}
          />
          {nameInputInvalid && <p className={classes.error}>Name is invalid</p>}
        </div>

        <div className={emailValidityClass}>
          <label htmlFor="">Your Email</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlur}
          />
          {emailInputInvalid && <p className={classes.error}>Email is invalid</p>}
        </div>

        <div className={classes.actions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleForm;
