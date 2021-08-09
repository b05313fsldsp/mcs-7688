import React from 'react';
import { compose, pure } from 'recompose';
import { DataChannelAdapter } from 'mcs-lite-ui';

const PreviewLayout = ({
  value,
}) => (
  <DataChannelAdapter
    dataChannelProps={{
      id: '',
      type: 'HEX_CONTROL',
      values: { value },
    }}
  />
);

export default compose(
  pure,
)(PreviewLayout);
