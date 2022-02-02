import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LestCard from 'components/organisms/LestCard';

const Home = () => {
  const [page, setPage] = useState(1);
  const fetchData = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status } = useQuery(['characters', page], fetchData);

  console.log('data', data);
  console.log('status', status);

  const data2 = [
    {
      name: 'Shrimp and Chorizo Paella',
      src: 'A',
      birthDate: 'September 14, 2016',
    },
    {
      name: 'Ahrimp and Chorizo Paella',
      src: 'B',
      birthDate: 'September 14, 2016',
    },
    {
      name: 'bhrimp and Chorizo Paella',
      src: 'C',
      birthDate: 'September 14, 2016',
    },
    {
      name: 'Schrimp and Chorizo Paella',
      src: 'D',
      birthDate: 'September 14, 2016',
    },
  ];
  return (
    <React.Fragment>
      <LestCard data={data2} />
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </React.Fragment>
  );
};

export default Home;
