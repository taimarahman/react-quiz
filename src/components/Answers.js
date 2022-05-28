import React from "react";
import classes from "../styles/Answers.module.css";
import CheckBox from "./CheckBox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="A New Hope 1" />
      <CheckBox className={classes.answer} text="A New Hope 1" />
      <CheckBox className={classes.answer} text="A New Hope 1" />
      <CheckBox className={classes.answer} text="A New Hope 1" />
    </div>
  );
};

export default Answers;
