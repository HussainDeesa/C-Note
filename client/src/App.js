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
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message)=>{
    setAlert({
      message:message
    })
    setTimeout(() => {
      setAlert({message:""})
    }, 3000);
  }
  const [progress, setprogress] = useState(0)
  const setProgress=(progress)=>{
    setprogress(progress)
  }
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
        <LoadingBar
          color='#fbff00'
          progress={progress}
        />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert} setprogress={setProgress} alert={alert}/>}  />
            <Route exact path="/about" element={<About setprogress={setProgress} />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} setprogress={setProgress} alert={alert} />} />
            <Route exact path="/signup" element={<Signup showAlert={showAlert} setprogress={setProgress} alert={alert} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
