import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SummaryDisplay from './Components/CaseInfoContent/SummaryDisplay';

function CaseInfoRoutes() {
    return (
        <Routes>
            <Route path="/caseInfo/:caseNumber/Summary" element={<SummaryDisplay />} />
        </Routes>
    )
}

export default CaseInfoRoutes;