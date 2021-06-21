import React from 'react';
import { Colors } from './utils';

type Box = {
  [key: string]: any;
  children?: React.ReactNode;
};

const Box = (Component: React.ElementType<Box | any>) => (props: Box) => {
  return process.env.NODE_ENV === 'development' ? (
    <div style={{ border: `3px solid ${Colors()}` }}>
      <Component {...props} />
    </div>
  ) : (
    <Component {...props} />
  );
};

export default Box;
