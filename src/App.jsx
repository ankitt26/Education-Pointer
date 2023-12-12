import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student_log from "./components/login/student_log";
import Teacher_log from "./components/login/teacher_log";
import Student from "./components/signup/student";
import Teacher from "./components/signup/teacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/signup/student" element={<Student />} />
        <Route path="/signup/teacher" element={<Teacher />} />
        <Route path="/login/student" element={<Student_log />} />
        <Route path="/login/teacher" element={<Teacher_log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
