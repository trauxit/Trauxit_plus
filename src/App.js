import logo from './logo.svg';
import './App.css';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
import Nav from './Layout/Nav';
import Insight from './Component/Insight/Insight';
import Application from './Component/Applications/Application';
import Create from './Component/Create/Create';
import Footer from './Layout/Footer';
import Shipment from './Component/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insights" element={<Insight />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/create" element={<Create />} />
          <Route path="/shipments" element={<Shipment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
