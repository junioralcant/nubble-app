import {AuthCredentialsModel, UserAPI, userAdapter} from '@domain';
import {authCredentialsStorage} from '@services';
import {server, userMocked} from '@test';
import {fireEvent, renderScreen, screen} from 'test-utils';

import {AppStack} from '@routes';

jest.unmock('@react-navigation/native');

const mateusUserAPI: UserAPI = {
  id: 7,
  first_name: 'Mateus',
  last_name: 'de Souza',
  username: 'mateussouza',
  email: 'msouza@coffstack.com',
  profile_url:
    'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png',
  is_online: false,
  full_name: 'Mateus de Souza',
};

const mateusAuthCredentials: AuthCredentialsModel = {
  token: 'access-token',
  tokenExpiresAt: '2030-10-07T12:08:50.433+00:00',
  refreshToken: 'refresh-token',
  user: userAdapter.toUser(mateusUserAPI),
};

describe('SearchScreen', () => {
  beforeAll(() => {
    server.listen();
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mateusAuthCredentials);
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
    jest.resetAllMocks();
  });

  it('Search Flow', async () => {
    renderScreen(<AppStack initialRouteName="SearchScreen" />);
    const inputText = screen.getByPlaceholderText(/digite sua busca/i);
    fireEvent.changeText(inputText, 'mar');

    const user1 = await screen.findByText(userMocked.user1.username);
    expect(user1).toBeTruthy();

    const user2 = await screen.findByText(userMocked.user2.username);
    expect(user2).toBeTruthy();

    fireEvent.press(user1);
  });
});
