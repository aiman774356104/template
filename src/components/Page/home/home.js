import React from 'react';
import LestCard from 'components/organisms/LestCard';

const Home = () => {
  const data = [
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
      <LestCard data={data} />
    </React.Fragment>
  );
};

export default Home;
