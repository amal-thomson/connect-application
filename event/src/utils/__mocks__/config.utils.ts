import { jest } from '@jest/globals';

export const readConfiguration = jest.fn(() => ({
  clientId: 'mockedClientId',
  clientSecret: 'mockedClientSecret',
  projectKey: 'mockedProjectKey',
  scope: 'mockedScope',
  region: 'mockedRegion',
}));
