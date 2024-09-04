import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ApiListContainer = styled.div`
  padding: 20px;
`;

const ApiItem = styled.div`
  margin-bottom: 10px;
`;

const ProvidersList: React.FC = () => {
  const { providerName } = useParams<{ providerName: string }>();
  const [apis, setApis] = useState<any[]>([]);

  useEffect(() => {
    if (providerName) {
      axios.get(`https://api.apis.guru/v2/${providerName}.json`)
        .then(response => setApis(Object.keys(response.data.apis)));
    }
  }, [providerName]);

  return (
    <ApiListContainer>
      <h2>{providerName} APIs</h2>
      {apis.map(api => (
        <ApiItem key={api}>
          <Link to={`/api/${api}`}>{api}</Link>
        </ApiItem>
      ))}
    </ApiListContainer>
  );
};

export default ProvidersList;
