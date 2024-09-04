import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ApiDetailsPage from './pages/ApiDetailsPage';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/provider/:providerName" element={<HomePage />} />
        <Route path="/api/:apiName" element={<ApiDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;