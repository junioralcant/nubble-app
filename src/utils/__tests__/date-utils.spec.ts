import {stringUtils} from '@utils';

test('capitalizeFirstLetter', () => {
  const name = stringUtils.capitalizeFirstLetter('ana maria');
  expect(name).toBe('Ana Maria');
});
