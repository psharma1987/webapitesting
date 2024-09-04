import React from 'react';
import Sidebar from '../components/Sidebar';
import ProviderList from '../components/ProvidersList';

const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <ProviderList />
    </div>
  );
};

export default HomePage;
