import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/NoteState';
import { Alert } from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message)=>{
    setAlert({
      message:message
    })
    setTimeout(() => {
      setAlert({message:message})
    }, 3000);
  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        {/* <Alert alert={alert}/> */}
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />} showAlert={showAlert}/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert}  alert={alert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert}  alert={alert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
