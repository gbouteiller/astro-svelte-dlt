{#if message}<div class="alert alert-error">{message}</div>{/if}
<form method="post" action="/api/signup" use:form class="flex w-full flex-col">
  <Input field="forename" label="Prénom" {formId} {errors} />
  <Input field="surname" label="Nom" {formId} {errors} />
  <Input type="url" field="avatar" label="Avatar" {formId} {errors} />
  <Input type="email" field="email" label="Courriel" {formId} {errors} />
  <Input type="password" field="password" label="Mot de passe" {formId} {errors} />
  <button type="submit" disabled={$isSubmitting} class="btn btn-primary">Je m'inscris</button>
</form>

<script lang="ts">
  import Input from '$lib/components/ui/form/input.svelte';
  import {SIGNUP, zSignup, type Signup} from '$lib/utils';
  import {validator} from '@felte/validator-zod';
  import {FelteSubmitError, createForm} from 'felte';

  // VARS ==================================================================================================================================
  const formId = 'signup';
  let message: string;

  const {errors, form, isSubmitting} = createForm<Signup>({
    initialValues: SIGNUP,
    extend: validator({schema: zSignup}),
    onError: async (error) => {
      message = await (error as FelteSubmitError).response.text();
    },
    onSuccess: () => location.reload(),
  });
</script>
