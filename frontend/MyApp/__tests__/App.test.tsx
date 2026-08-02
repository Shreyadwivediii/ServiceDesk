/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { ThemeProvider } from '../src/theme';
import { ToastProvider } from '../src/components/ui';
import Splash from '../src/screens/Splash';

test('renders correctly', async () => {
  jest.useFakeTimers();
  const navigation = { replace: jest.fn() };

  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(
      <ThemeProvider>
        <ToastProvider>
          <Splash navigation={navigation} />
        </ToastProvider>
      </ThemeProvider>
    );
    jest.runOnlyPendingTimers();
  });

  expect(navigation.replace).not.toHaveBeenCalled();
});
