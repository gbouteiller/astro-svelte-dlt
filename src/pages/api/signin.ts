import {signin, superValidate} from '$/lib/server/utils';
import {zSignin} from '$/lib/utils';
import type {APIRoute} from 'astro';

export const POST: APIRoute = async ({locals, redirect, request}) => {
  const rParsed = await superValidate(request, zSignin);
  if (!rParsed.success) return new Response(rParsed.error.message, {status: rParsed.error.status});
  const rSignin = await signin(rParsed.data);
  if (!rSignin.success) return new Response(rSignin.error.message, {status: rSignin.error.status});
  locals.auth.setSession(rSignin.data);
  return redirect('/', 302);
};
