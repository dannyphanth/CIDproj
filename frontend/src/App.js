import './App.css';
import HomePage from './Views/HomePage/HomePage';
import FilterSearchPage from './Views/FilterSearchPage/FilterSearchPage';
import ListSearchPage from './Views/ListSearchPage/ListSearchPage';
import CaseInfoPage from './Views/CaseInfoPage/CaseInfoPage';
import AddCasePage from './Views/AddCasePage/AddCasePage';
import CaseInfoRoutes from './CaseInfoRoutes';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes >

          <Route path="/" element={<HomePage />} />
          <Route path="/filter-search" element={<FilterSearchPage />} />

          <Route path="/listAll-search" element={<ListSearchPage />} />
          <Route path="/caseInfo/:caseNumber" element={<CaseInfoPage />} />

          <Route path="/addCase" element={<AddCasePage />} />
        </Routes>

        <CaseInfoRoutes />

      </div>
    </Router>
  );
}

export default App;