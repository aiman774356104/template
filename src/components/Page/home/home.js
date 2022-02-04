import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LestCard from 'components/organisms/LestCard';

const Home = () => {
  const [page, setPage] = useState(1);

  // const fetchData = async ({ queryKey }) => {
  //   const response = await fetch(
  //     `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
  //   );
  //   return response.json();
  // };

  function fetchData() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return axios({
      method: 'GET',
      baseURL: 'https://rickandmortyapi.com/api/',
      url: 'character',
      params: { page: page },
      headers,
    });
  }

  const { data, status } = useQuery(['characters', page], fetchData);


  return status === 'loading' ? (
    <div>
      <h3>loading......</h3>
    </div>
  ) : (
    <React.Fragment>
      <LestCard data={data?.data?.results} />
      <br />
      <Stack>
        <Pagination
          count={data?.data?.info.pages}
          onChange={(_, e) => setPage(e)}
          color="primary"
          page={page}
        />
      </Stack>
    </React.Fragment>
  );
};

export default Home;
