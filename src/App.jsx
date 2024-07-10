import { Route, Routes } from "react-router-dom";
import "./App.css";
import Group from "./pages/group";
import Homework from "./pages/homework";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="aws">AWS-18</h1>
        <div className="aws__wrapper">
          <Routes>
            <Route path="/" element={<Group />}></Route>
            <Route path="/Homework" element={<Homework />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
