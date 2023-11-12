import {signup, superValidate} from '$/lib/server/utils';
import {zSignup} from '$/lib/utils';
import type {APIRoute} from 'astro';

export const POST: APIRoute = async ({locals, redirect, request}) => {
  const rParsed = await superValidate(request, zSignup);
  if (!rParsed.success) return new Response(rParsed.error.message, {status: rParsed.error.status});
  const rSignup = await signup(rParsed.data);
  if (!rSignup.success) return new Response(rSignup.error.message, {status: rSignup.error.status});
  locals.auth.setSession(rSignup.data);
  return redirect('/', 302);
};
