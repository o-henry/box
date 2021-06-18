import React from 'react';
import { Colors } from './utils';

type Box<T> = { Component: React.ComponentType<T> };

const BoxDev =
  <T extends object>({ Component }: Box<T>) =>
  (props?: T) =>
    (
      <div style={{ border: `3px solid ${Colors()}` }}>
        <Component {...(props as T)} />
      </div>
    );

const BoxProd =
  <T extends object>({ Component }: Box<T>) =>
  (props?: T) =>
    <Component {...(props as T)} />;

export const Box = process.env.NODE_ENV === 'development' ? BoxDev : BoxProd;
