import "./App.scss";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
