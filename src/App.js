import logo from './logo.svg';
import './App.css';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import Nav from './Layout/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
