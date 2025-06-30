import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./ui/pages/Home";
import AdminView from "./ui/pages/AdminView";
import CreateUser from "./users/CreateUser"
import UpdateUser from "./users/UpdateUser"
import ReadUser from "./users/ReadUser"
import Login from "./ui/pages/Login"
import ChangePassword from './users/ChangePassword';
import ResetPassword from './users/ResetPassword';
import ForgotPassword from './users/ForgotPassword';
import DiagnosticQuizSelection from "./ui/quizzes/DiagnosticQuizSelection"
import ArabicDiagnosticQuiz from './ui/quizzes/ArabicDiagnosticQuiz';
import Contents from './ui/pages/Contents';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/adduser" element={<CreateUser />} />
        <Route path="/updateuser/:user_id" element={<UpdateUser />} />
        <Route path="/viewuser/:user_id" element={<ReadUser />} />
        <Route path="/users/id/:user_id" element={<ReadUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizzes" element={<DiagnosticQuizSelection />} />
        <Route path="/quizzes/arabic-diagnostic-quiz" element={<ArabicDiagnosticQuiz />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/learning" element={<Contents />} />
      </Routes>
    </div>
  );
}

export default App;
