import * as React from "react";
import { Component } from "react";
import MyContext from "../utils/MyContext";
function Register() {
  const num = React.useContext(MyContext);
  
  return (
    <>
      <div>register</div>
    </>
  );
}

export default Register;
