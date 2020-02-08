import React from "react";
import "./styles.css";
import TheDate from "./state/TheDate";
import CounterTwoUpdating from "./state/CounterTwoUpdating";

export default function App() {
  return (
    <div className="App">
      <TheDate />
      <CounterTwoUpdating />
    </div>
  );
}
