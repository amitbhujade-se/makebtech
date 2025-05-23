// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import CorpTraining from './Pages/CorpTraining/CorpTraining';
import CorporateProfile from './Pages/CorporateProfile/CorporateProfile';
import OurTeam from './Pages/OurTeam/OurTeam';
import VissionAndMission from './Pages/VisionAndMission/VissionAndMission';
import TrainingAndDev from './Pages/TraningAndDev/TrainingAndDev';
import WalkIn from './Pages/WalkIn/WalkIn';
import RecruitmentP from './Pages/Recruitment/RecruitmentP';
import Contact from './Pages/Contact/Contact';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/Register/Register';
import Why from './Pages/Why/Why';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<CorporateProfile />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/vision&mission" element={<VissionAndMission />} />
        <Route path="/training&development" element={<TrainingAndDev />} />
        <Route path="/corporate-training" element={<CorpTraining />} />
        <Route path="/walk-in" element={<WalkIn />} />
        <Route path="/recruitment-process" element={<RecruitmentP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why" element={<Why />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
