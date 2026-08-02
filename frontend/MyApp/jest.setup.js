/* global jest */

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(async () => null),
  setItem: jest.fn(async () => null),
  removeItem: jest.fn(async () => null),
  multiRemove: jest.fn(async () => null),
  clear: jest.fn(async () => null),
}));

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
