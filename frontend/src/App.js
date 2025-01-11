import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./ui/pages/Home";
import CreateUser from "./users/CreateUser"
import UpdateUser from "./users/UpdateUser"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route exact path ="/adduser" element={<CreateUser/>}/>
            <Route exact path ="/updateuser/:id" element={<UpdateUser/>}/>
          </Routes>

      </Router>

    </div>
  );
}

export default App;
