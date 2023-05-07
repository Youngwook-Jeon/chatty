import { setupServer } from 'msw/node';
import { authHandlers } from './handlers/auth';
import { notificationHandlers } from './handlers/notification';

// Setup requests interceptor
export const server = setupServer(...authHandlers, ...notificationHandlers);
