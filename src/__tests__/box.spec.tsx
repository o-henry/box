import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Box from '../index';

describe('Visual Box', () => {
  it('should render box', () => {
    const Mock = Box(() => {
      return <div>Hello World</div>;
    });

    render(<Mock />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it('should handle state component', () => {
    const CompWithState = Box(() => {
      const [state, setState] = React.useState('hello state');
      return <div>{state}</div>;
    });

    render(<CompWithState />);
    expect(screen.getByText(/hello state/i)).toBeInTheDocument();
  });

  // it('should render on ref component', () => {});
  // it('should render only on "development" environment', () => {});
});
