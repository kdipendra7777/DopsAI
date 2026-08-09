import { Routes, Route } from "react-router-dom";

import DopsPage from "./assets/Pages/DopsAI/DopsPage";
import CareersHero from "./assets/Pages/Career/CareerHome/CareersHero";
import JobDetails from "./assets/Components/JOBS/JobDetails";
import JobApplication from "./assets/Components/JOBS/JobApplication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DopsPage />} />
       <Route path="/careers" element={<CareersHero />} />
       <Route path="/careers/ai-research" element={< JobDetails/>} />
       <Route path="/careers/apply/ai-research" element={< JobApplication/>} />

    </Routes>

    // Footer Section
    // Company

     
     
    

  );
}

export default App;