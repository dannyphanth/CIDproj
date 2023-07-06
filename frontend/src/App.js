import './App.css';
import HomePage from './Views/HomePage/HomePage';
// import FilterSearchPage from './Views/HomePage/FilterSearchPage/FilterSearchPage';
import FilterSearchPage from './Views/FilterSearchPage/FilterSearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter-search" element={<FilterSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;