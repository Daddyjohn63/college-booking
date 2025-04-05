'use client';

import { authClient } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
export default function SignoutButton() {
  return (
    <Button
      className="bg-neutral-700 text-white p-2 rounded-md"
      onClick={() => authClient.signOut()}
    >
      Signout
    </Button>
  );
}
