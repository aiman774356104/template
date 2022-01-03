import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// web.cjs is required for IE11 support;
import { Card } from 'components/UI/atoms';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState();
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
      <div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {data.map((e, i) => (
            <Card
              icon
              key={i}
              name={e.name}
              src={e.src}
              birthDate={e.birthDate}
              onClick={() => setOpen({open: true, text: e.name})}
            >
              <div>
                <p>{e.name}</p>
              </div>
            </Card>
          ))}
        </div>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open?.open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Box sx={style}>
            <p>{open?.text}</p>
          </Box>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Home;
