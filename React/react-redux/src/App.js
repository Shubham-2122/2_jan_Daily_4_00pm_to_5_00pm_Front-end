import React from "react";
import Count from "./features/Counter/Count";
import Count2 from "./features/Counter/Count2";
import Todolist from "./features/Todo/Todolist";
import Addtodo from "./features/Todo/Addtodo";

function App() {
  return (
    <div className="App">
      <h1>hello this Redux app</h1>
      {/* <Count />
      <Count2 /> */}
      <Addtodo />
      <Todolist />
    </div>
  );
}

export default App;
