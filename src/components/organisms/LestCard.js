import React from 'react';
import PropTypes from 'prop-types';

import { Card, Modal } from 'designSystems/molecules';

const LestCard = ({ data }) => {
  const [open, setOpen] = React.useState();
  return (
    <div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {data.map((e, i) => (
          <Card
            icon
            key={i}
            name={e.name}
            src={e.src}
            birthDate={e.birthDate}
            onClick={() => setOpen({ open: true, text: e.name })}
          >
            <div>
              <p>{e.name}</p>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={open?.open} onClose={() => setOpen(false)}>
        <p>{open?.text}</p>
      </Modal>
    </div>
  );
};
LestCard.propTypes = {
  data: PropTypes.shape,
};

export default LestCard;
