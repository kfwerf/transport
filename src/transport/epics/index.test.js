import { getFirstPartLowerCase, getResultWithDescription } from './index';

test('get first part from a string lowercased', () => {
  const result = getFirstPartLowerCase('HyUndAi type 50');
  expect(result).toEqual('hyundai');
});

test('get results with a description and brand seperation', () => {
  const result = getResultWithDescription([{
    id: 0,
    brand: 'HyUndAi type 50',
    img: 'somimg.jpg',
    colors: ['red', 'turquoise'],
    type: 'batmobile',
  }]);
  expect(result).toEqual([{
    id: 0,
    brand: 'hyundai',
    description: 'HyUndAi type 50',
    img: 'somimg.jpg',
    colors: ['red', 'turquoise'],
    type: 'batmobile',
  }]);
});