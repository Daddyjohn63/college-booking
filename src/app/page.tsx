import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { signIn, signUp } from '@/server/users';
import { headers } from 'next/headers';
import SignoutButton from './signout';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-3">
        <Button
          className="bg-neutral-700 text-white p-2 rounded-md"
          onClick={signIn}
        >
          Sign In
        </Button>
        <Button
          className="bg-neutral-700 text-white p-2 rounded-md"
          onClick={signUp}
        >
          Sign Up
        </Button>
        <SignoutButton />
      </div>
      <p>{!session ? 'Not authenticated' : session.user.name}</p>
    </main>
  );
}
