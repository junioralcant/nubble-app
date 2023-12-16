import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter fo each word', () => {
      const name = stringUtils.capitalizeFirstLetter('ana maria');
      expect(name).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter(' ana maria')).toBe('Ana Maria');
    });
  });
});
