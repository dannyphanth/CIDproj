import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SubNavProvider } from './SubNavContext';
import SummaryDisplay from './Components/CaseInfoContent/SummaryDisplay';
import CDCDisplay from './Components/CaseInfoContent/CDCDisplay';
import DeltaVDisplay from './Components/CaseInfoContent/DeltaVDisplay';
import SpecificationsDisplay from './Components/CaseInfoContent/SpecificationsDisplay';

function CaseInfoRoutes() {
    return (
        <SubNavProvider>
            <Routes>
                <Route path="/caseInfo/:caseNumber/Summary" element={<SummaryDisplay />} />
                <Route path="/caseInfo/:caseNumber/vehicle/:vehicleNumber/CDCdata/:CDCNumber" element={<CDCDisplay />} />
                <Route path="/caseInfo/:caseNumber/vehicle/:vehicleNumber/DeltaV" element={<DeltaVDisplay />} />
                <Route path="/caseInfo/:caseNumber/vehicle/:vehicleNumber/Specifications" element={<SpecificationsDisplay />} />
            </Routes>
        </SubNavProvider>

    )
}

export default CaseInfoRoutes;