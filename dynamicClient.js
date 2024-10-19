// dynamicClient.js
import { createClient } from '@dynamic-labs/sdk-core';

export const dynamicClient = createClient({
  environmentId: process.env.DYNAMIC_CLIENT_ENV_ID, // Replace with your environment ID
  appName: 'Dynamic Demo',
});
