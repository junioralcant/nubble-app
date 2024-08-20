import {initializeStorage} from '../services/storage';
import {inMemoryStorage} from '../services/storage/implementations/jest/inMemoryStorage';

export {};

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

initializeStorage(inMemoryStorage);
