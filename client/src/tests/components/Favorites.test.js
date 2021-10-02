import Favorites from '../../components/Favorites'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'


// Write a test to make sure the correct dish is 
// set as the selected dish on clicking the 




it('should call onDishClick with the correct input', () => {
  const SetSelectedDish = jest.fn()
  const favorites = ['Fish and chips']
  const updateFavorites = jest.fn()

  render(
    <BrowserRouter>
      <Favorites 
        SetSelectedDish={SetSelectedDish} 
        favorites={favorites}
        updateFavorites={updateFavorites}
      />
    </BrowserRouter>
  )

  // click on button
  fireEvent.click(screen.getByTestId('DishSelectButton'))

  // check if setSelectedDish
  expect(SetSelectedDish.mock.calls.length).toBe(1);

})


// const onDishClick = (event) => {
//   const dishElement = event.target.outerText;
//   SetSelectedDish(dishElement);
// };






