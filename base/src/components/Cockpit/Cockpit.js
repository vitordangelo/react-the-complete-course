import React, { useEffect, useRef } from "react";
import classes from "./Cockipt.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("Cockpit.js - useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud");
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log("Cockpit.js - cleaning");
    };
  }, []);

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockipt}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Login</button>
    </div>
  );
};

export default React.memo(cockpit);
