import { Routes, Route } from "react-router-dom";

import DopsPage from "./Pages/DopsAI/DopsPage";
import CareersHero from "./Pages/Career/CareerHome/CareersHero";
import JobDetails from "./Components/JOBS/JobDetails";
import JobApplication from "./Components/JOBS/JobApplication";


function App() {
  return (
    <Routes>

      {/* DopsPage Main Path */}
      <Route path="/" element={<DopsPage />} />

      {/* Career Section */}
       <Route path="/careers" element={<CareersHero />} />

       {/* Job Detsils Page */}
       <Route path="/careers/ai-research" element={< JobDetails/>} />

       {/* Job Application Page */}
       <Route path="/careers/apply/ai-research" element={< JobApplication/>} />

       

    </Routes>

      

     
     
    

  );
}

export default App;