import { Colors } from './utils';
import React from 'react';

type Box<T> = { Component: React.ComponentType<T> };

const Box =
  <T extends object>({ Component }: Box<T>) =>
  (props?: T) =>
    (
      <div data-testid="box" style={{ border: `3px solid ${Colors()}` }}>
        <Component {...(props as T)} />
      </div>
    );

export default Box;
