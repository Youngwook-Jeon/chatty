import { setupServer } from 'msw/node';
import { authHandlers } from './handlers/auth';

// Setup requests interceptor
export const server = setupServer(...authHandlers);
