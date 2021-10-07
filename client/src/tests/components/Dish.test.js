import { render, screen } from '@testing-library/react';
import CountryPage from '../../components/Dish/Dish';

jest.mock('../../ApiService.ts', () => ({
  getDishInfo: () => ({ dish: 'Paella' }),
}));


describe('Dish component', () => {
  test('Should match the spnapshot', () => {
    const { container } = render(<CountryPage />);
    expect(container.firstChild).toMatchSnapshot();
  });

})