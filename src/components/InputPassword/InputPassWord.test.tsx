import React from 'react';

import {render, screen} from 'test-utils';

import {InputPassword} from './InputPassWord';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnChange = jest.fn();
    render(
      <InputPassword
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnChange}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();
  });
});
