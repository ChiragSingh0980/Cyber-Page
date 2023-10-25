import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/loginp';
import Register from './pages/Register';
import Mainpage from './pages/MainPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/main" element={<Mainpage/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
