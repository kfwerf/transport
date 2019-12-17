import { removeDupes } from './index';

test('removes duplicates from a list', () => {
  const result = ['red', 'red', 'blue', 'red', 'orange', 'r3d'].filter(removeDupes);
  expect(result).toEqual(['red', 'blue', 'orange', 'r3d']);
});
