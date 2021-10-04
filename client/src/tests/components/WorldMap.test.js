import WorldMap from '../../components/WorldMap';
import { render, screen } from '@testing-library/react';
import assignCountry from '../../data/countries.json';
import * as mapData from '../../data/countries.json';

/*
const assignRandomCountry = (array) => {
    const index = randomArrayIndex(array)
    assignCountry(array, index)
}

const randomArrayIndex = (array) => {
    return Math.floor(Math.random() * array.length)
}

const assignCountry = (array, index) => {
    const country = array[index].properties.ADMIN
    SetSelectedCountry(country);
    console.log(country)
}
*/

// describe('assign country sets the expected country', () => {
//     test('called with array mapData.features and index 0 returns Aruba', () => {
//       console.log(assignCountry(mapData.features))
//       expect(assignCountry(mapData.features, 0)).toBe('Aruba')
//     })
// })
