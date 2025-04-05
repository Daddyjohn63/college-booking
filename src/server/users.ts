'use server';

import { auth } from '@/lib/auth';

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: 'john@test.com',
      password: 'password123'
    }
  });
};

export const signUp = async () => {
  if (
    !process.env.TEST_EMAIL ||
    !process.env.TEST_PASSWORD ||
    !process.env.TEST_NAME
  ) {
    throw new Error('Missing required environment variables');
  }

  await auth.api.signUpEmail({
    body: {
      email: process.env.TEST_EMAIL,
      password: process.env.TEST_PASSWORD,
      name: process.env.TEST_NAME
    }
  });
};
