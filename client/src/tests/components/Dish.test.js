import { render, screen } from '@testing-library/react';
import CountryPage from '../components/Dish.js';

describe('Dish component', () => {
  test('Should match the spnapshot', () => {
    const { container } = render(<CountryPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('Get Dish Info should return an array', () => {});
});

//move setDishInfo
