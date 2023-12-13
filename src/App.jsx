import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student_log from "./components/login/student_log";
import Teacher_log from "./components/login/teacher_log";
import Student from "./components/signup/student";
import Teacher from "./components/signup/teacher";
import Dashboard from "./components/dashboard";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup/student" element={<Student />} />
        <Route path="/signup/teacher" element={<Teacher />} />
        <Route path="/login/student" element={<Student_log />} />
        <Route path="/login/teacher" element={<Teacher_log />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
