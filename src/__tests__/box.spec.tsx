import { render } from '@testing-library/react';
import Box from '../index';

describe('Visual Box', () => {
  const Title = Box(() => {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  });

  it('should render box', () => {
    render(<Title />);
  });

  it('should render only on "development" environment', () => {});

  it('should render on ref component', () => {});

  it('should handle state component', () => {});
});
