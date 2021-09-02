// Dependencies
import { config } from '@vue/test-utils'
import { enableFetchMocks } from 'jest-fetch-mock';

// Mock i18n module
config.mocks.$tc = (msg) => msg;
config.mocks.$t = (msg) => msg;

// Mock fetch
enableFetchMocks();
