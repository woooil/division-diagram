import { hot } from "react-hot-loader/root";
import React from "react";
import DivisionDiagram from './apps/division-diagram/components/App';

function App() {
  return (
    <div className="App">
      <DivisionDiagram />
    </div>
  );
}

export default hot(App);
