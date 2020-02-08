import React from "react";
import "./styles.css";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";

export default function App() {
  return (
    <div className="App">
      <TheDate />
      <Counter />
    </div>
  );
}
