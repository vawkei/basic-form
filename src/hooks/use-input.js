//These are codes to use hooks with the form, but choose not to, I am not really a fan of hooks, reason why i didnt implement it.

// import { useState } from "react";

// const useInput = (validateValue) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateValue(enteredValue);
//   const hasError = !valueIsValid && isTouched;

//   const valueChangeHandler = (e) => {
//     setEnteredValue(e.target.value);
//   };

//   const InputBlurHandler = (e) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     hasError: hasError,
//     valueChangeHandler,
//     InputBlurHandler,
//     isValid: valueIsValid,
//     reset,
//   };
// };

// export default useInput;
