{#if message}<div class="alert alert-error">{message}</div>{/if}
<form method="post" action="/api/signout" use:form class="flex w-full flex-col">
  <button type="submit" disabled={$isSubmitting} class="btn btn-primary">Je me déconnecte</button>
</form>

<script lang="ts">
  import {FelteSubmitError, createForm} from 'felte';

  // VARS ==================================================================================================================================
  let message: string;

  const {form, isSubmitting} = createForm<{}>({
    onError: async (error) => {
      message = await (error as FelteSubmitError).response.text();
    },
    onSuccess: () => location.reload(),
  });
</script>
