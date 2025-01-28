import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./ui/pages/Home";
import CreateUser from "./users/CreateUser"
import UpdateUser from "./users/UpdateUser"
import ReadUser from "./users/ReadUser"
import Login from "./ui/pages/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route exact path ="/adduser" element={<CreateUser/>}/>
            <Route exact path ="/updateuser/:user_id" element={<UpdateUser/>}/>
            <Route exact path ="/viewuser/:user_id" element={<ReadUser/>}/>
            <Route exact path="/users/id/:user_id" element={<ReadUser />} />
            <Route exact path="/login/" element={<Login/>}/>
          </Routes>

      </Router>

    </div>
  );
}

export default App;
