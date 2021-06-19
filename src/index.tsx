import React from 'react';
import { Colors } from './utils';

type Box = { Component: React.ElementType };

const Box =
  <T extends Box = Box>(Component: React.ComponentType<T>) =>
  (props?: T) => {
    return process.env.NODE_ENV === 'development' ? (
      <div data-testid="box" style={{ border: `3px solid ${Colors()}` }}>
        <Component {...(props as T)} />
      </div>
    ) : (
      <Component {...(props as T)} />
    );
  };

export default Box;
