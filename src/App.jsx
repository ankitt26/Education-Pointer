import "./App.css";
import Student_log from "./components/login/student_log";
import Teacher_log from "./components/login/teacher_log";
import Student from "./components/signup/student";
import Teacher from "./components/signup/teacher";

function App() {
  return (
    <>
      <Student />
      <Teacher />
      <Student_log />
      <Teacher_log />
    </>
  );
}

export default App;
