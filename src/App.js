import React from "react";
import "./styles.css";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import InputQuery from "./components/InputQuery";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  return (
    <div>
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
}
