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
import Wallet from './Component/Wallet/Wallet';
import Msg from './Component/Mssg/Msg';
import Plus from './Component/HeaderContent/Plus';
import List from './Component/HeaderContent/List';
import Project from './Component/HeaderContent/Project';
import ShipmentDetails from './Component/Shipment/ShipmentDetails';
import CreateShipment from './Component/Shipment/Create'
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
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/message" element={<Msg />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/lists" element={<List />} />
          <Route path="/project" element={<Project />} />
          <Route path="/shipment-details/:id" element={<ShipmentDetails />} />
          <Route path="/create-shipment" element={<CreateShipment />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
