import React from "react";
import "./styles.css";
import TheDate from "./state/TheDate";
import CounterTwoUpdating from "./state/CounterTwoUpdating";
import CounterThree from "./StateandProps/CounterThree";

export default function App() {
  return (
    <div className="App">
      <TheDate />
      <CounterTwoUpdating />
      <CounterThree count={123} />
    </div>
  );
}
