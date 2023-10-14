import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <div className="App">
      <SignUpPage />
    </div>
  );
}

export default App;
