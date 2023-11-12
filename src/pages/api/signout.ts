import {signout} from '$/lib/server/utils';
import type {APIRoute} from 'astro';

export const POST: APIRoute = async ({locals, redirect}) => {
  const session = await locals.auth.validate();
  await signout(session);
  // eslint-disable-next-line unicorn/no-null
  locals.auth.setSession(null);
  return redirect('/connexion', 302);
};
