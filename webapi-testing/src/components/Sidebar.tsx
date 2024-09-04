import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios,{ AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  height: 100vh;
  padding: 20px;
`;

const Button = styled.button`
  margin-bottom: 20px;
`;

const ProviderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProviderItem = styled.li`
  margin-bottom: 10px;
`;

const Sidebar: React.FC = () => {
  const [providers, setProviders] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // axios.get('https://api.apis.guru/v2/providers.json')
    //   .then(response => setProviders(Object.keys(response.data)));
    //   console.log(providers);

      const fetchData = async () => {
    
        try {
        
        const response: AxiosResponse = await axios.get('https://api.apis.guru/v2/providers.json');
        
        const responseData: any = response.data;
        
        console.log(responseData.data,"Orig");
        setProviders(responseData.data)
        } catch (error) {
        
        // Handle the error
        
        }

    }
    fetchData();

  }, []);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</Button>
    <SidebarContainer style={{ display: isOpen ? 'block' : 'none' }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</Button>
      <ProviderList>
        {providers.map(provider => (
          <ProviderItem key={provider}>
            <Link to={`/provider/${provider}`}>{provider}</Link>
          </ProviderItem>
        ))}
      </ProviderList>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;