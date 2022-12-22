// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import StatusPage from "./pages/StatusPage/StatusPage";
import BreedBoxPage from "./pages/BreedBoxPage/BreedBoxPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/schedule/:userid/" element={<PrivateRoute><SchedulePage /></PrivateRoute>} />
        <Route path="/status" element={<PrivateRoute><StatusPage /></PrivateRoute>} />
        <Route path="/breedbox" element={<PrivateRoute><BreedBoxPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
