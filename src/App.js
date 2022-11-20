import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/routes/uber/users/123/accept-request/positive",
        {
          withCredentials: true,
          headers: {
            "X-Temporarity-Api-Key":
              "$2b$10$/YqvBUAZR.WowTJ7QPbQDuHHp8rtx7w4sdVgUiJb4I.TaaBJ/uZ4q",
          },
          responseType: "blob",
        }
      )
      .then((res) => {
        setImg(URL.createObjectURL(res.data));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={img} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
