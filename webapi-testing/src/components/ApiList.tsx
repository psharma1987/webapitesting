import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ApiDetailsContainer = styled.div`
  padding: 20px;
`;

const ApiDetails: React.FC = () => {
  const { apiName } = useParams<{ apiName: string }>();
  const [apiDetails, setApiDetails] = useState<any | null>(null);

  useEffect(() => {
    if (apiName) {
      axios.get(`https://api.apis.guru/v2/${apiName}.json`)
        .then(response => setApiDetails(response.data));
    }
  }, [apiName]);

  return (
    <ApiDetailsContainer>
      {apiDetails ? (
        <div>
          <h2>{apiDetails.name}</h2>
          <p>{apiDetails.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </ApiDetailsContainer>
  );
};

export default ApiDetails;