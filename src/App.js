import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import LoginForm from "./pages/login/LoginForm";
import ThankYou from "./pages/thankyou/ThankYou";
import RegistrationForm from "./pages/registration/RegistrationForm";
import BallotPaper from "./pages/BallotPaper/BattotPaper";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddPatry from "./pages/AddParty/AddPatry";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminRegistration from "./pages/Admin/AdminRegistration/AdminRegistrationForm";
import QrCode from "./pages/QR code/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/registration" element={< LoginForm/>} />
        <Route path="/ballotpaper" element={<BallotPaper />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/addparty" element={<AddPatry />} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminregistration" element={<AdminRegistration/>}/>
        <Route path="/qrcode" element={<QrCode/>}/>
      </Routes>
    </Router>
  );
}

export default App;