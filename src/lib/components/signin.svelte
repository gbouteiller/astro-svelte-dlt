{#if message}<div class="alert alert-error">{message}</div>{/if}
<form method="post" action="/api/signin" use:form class="flex w-full flex-col">
  <Input type="email" field="email" label="Courriel" {formId} {errors} />
  <Input type="password" field="password" label="Mot de passe" {formId} {errors} />
  <button type="submit" disabled={$isSubmitting} class="btn btn-primary">Je me connecte</button>
</form>

<script lang="ts">
  import Input from '$lib/components/ui/form/input.svelte';
  import {SIGNIN, zSignin, type Signin} from '$lib/utils';
  import {validator} from '@felte/validator-zod';
  import {FelteSubmitError, createForm} from 'felte';

  // VARS ==================================================================================================================================
  const formId = 'signin';
  let message: string;

  const {errors, form, isSubmitting} = createForm<Signin>({
    initialValues: SIGNIN,
    extend: validator({schema: zSignin}),
    onError: async (error) => {
      message = await (error as FelteSubmitError).response.text();
    },
    onSuccess: () => location.reload(),
  });
</script>
