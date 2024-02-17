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
import User from './Component/User/User';
import Jobs from './Component/Jobs/Jobs';
import Profile from './Component/User/Profile';
import Signup from './Component/Auth/Signup';
import Company from './Component/Auth/Company';
import Personal from './Component/Auth/Personal';
import TopUp from './Component/Wallet/TopUp';
import PayInvoice from './Component/Wallet/PayInvoice';
import Payment from './Component/Wallet/Payment';
import Other from './Component/Wallet/Other';
import ShipperProfile from './Component/User/ShipperProfile';
import CarrierProfile from './Component/User/CarrierProfile';
import OtherWallet from './Component/Wallet/OtherWallet';
import Confirm from './Component/Wallet/Confirm';
import PayWallet from './Component/Wallet/PayWallet';
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
          <Route path="/user" element={<User />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ascompany' element={<Company />} />
          <Route path='asindividual' element={<Personal />} />
          <Route path='/top-up' element={<TopUp />} />
          <Route path='/pay-invoice' element={<PayInvoice />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/other-payment' element={<Other />} />
          <Route path='shipper-profile' element={<ShipperProfile />} />
          <Route path='/carrier-profile' element={<CarrierProfile />} />
          <Route path='/other-wallet' element={<OtherWallet />} />
          <Route path='/confirm' element={<Confirm />} />
          <Route path='/pay-wallet' element={<PayWallet />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
