import WorldMap from '../../components/WorldMap/WorldMap';
import { render, screen } from '@testing-library/react';

describe('Dish component', () => {
  test('Should match the spnapshot', () => {
    const { container } = render(<WorldMap />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('Should render the headings', () => {
    render(<WorldMap />);
    screen.getByText(/Eat the World/);
    screen.getByText(/View Food/);
    screen.getByText(/Random!/);
  });
});
