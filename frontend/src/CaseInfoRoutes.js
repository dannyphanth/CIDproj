import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SummaryDisplay from './Components/CaseInfoContent/SummaryDisplay';
import CDCDisplay from './Components/CaseInfoContent/CDCDisplay';
import DeltaVDisplay from './Components/CaseInfoContent/DeltaVDisplay';

function CaseInfoRoutes() {
    return (
        <Routes>
            <Route path="/caseInfo/:caseNumber/Summary" element={<SummaryDisplay />} />
            <Route path="/caseInfo/:caseNumber/vehicle/:vehicleNumber/CDCdata" element={<CDCDisplay />} />
            <Route path="/caseInfo/:caseNumber/vehicle/:vehicleNumber/DeltaV" element={<DeltaVDisplay />} />
        </Routes>
    )
}

export default CaseInfoRoutes;