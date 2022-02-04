import React from 'react';
import PropTypes from 'prop-types';

import { Card, Modal } from 'components/molecules';

const LestCard = ({ data }) => {
  const [open, setOpen] = React.useState();
  const [state, setState] = React.useState({});
  return (
    <div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {data?.map((e, i) => (
          <Card
            icon
            key={i}
            name={e?.name}
            src={e?.image}
            birthDate={e?.created}
            onClick={() => {
              setState(e);
              setOpen({ open: true });
            }}
          >
            <div>
              <p>{e.name}</p>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={open?.open} onClose={() => setOpen(false)}>
        <div style={{ display: 'flex', gap: 10 }}>
          <img
            src={state?.image}
            alt={state?.name}
            style={{ width: 200, height: 225 }}
          />
          <div>
          <p>Name: {state?.name}</p>
          <p>Species: {state?.species}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
LestCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default LestCard;
