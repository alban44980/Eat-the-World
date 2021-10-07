import { render, screen } from '@testing-library/react';
import App from '../../App';
import 'jest-canvas-mock';

describe('App Component', () => {
  test('should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
