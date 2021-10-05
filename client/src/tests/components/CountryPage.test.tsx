import CountryPage from '../../components/CountryPage/CountryPage';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

// countrySelected,
// SetSelectedDish,
// updateFavorites,
// favorites,


// it('should call onDishClick', () => {
//   const countrySelected = 'Greenland'
//   const SetSelectedDish = jest.fn();
//   const dishSelected = 'Kiviak';
//   const favorites = ['Fish and Chips'];

//   render(
//     <BrowserRouter>
//       <CountryPage
//         countrySelected={countrySelected}
//         SetSelectedDish={SetSelectedDish}
//         dishSelected={dishSelected}
//         favorites={favorites}
//       />
//     </BrowserRouter>
//   );

//   fireEvent.click(screen.getByTestId('DishSelectButton2'));
//   expect(SetSelectedDish.mock.calls.length).toBe(1);
// });