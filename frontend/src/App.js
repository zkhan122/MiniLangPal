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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<AdminView />} />
          <Route exact path="/adduser" element={<CreateUser />} />
          <Route exact path="/updateuser/:user_id" element={<UpdateUser />} />
          <Route exact path="/viewuser/:user_id" element={<ReadUser />} />
          <Route exact path="/users/id/:user_id" element={<ReadUser />} />
          <Route exact path="/login/" element={<Login />} />
          <Route exact path="/quizzes/" element={<DiagnosticQuizSelection />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
