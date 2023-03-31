import "./App.scss";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
