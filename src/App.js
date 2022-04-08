import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./CakeContainer";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <CakeContainer/>
      </div></Provider>
  );
}

export default App;
