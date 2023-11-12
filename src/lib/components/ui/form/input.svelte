<div class="form-control {cEl}">
  <label for={id} class="label">
    <span class="label-text{error ? ' text-error' : ''}">{label}</span>
  </label>
  <input {id} name={field} {type} class="input input-bordered{error ? ' input-error' : ''}" />
  <label for={id} class="label h-8">
    <span class="label-text-alt text-error">{error ?? ''}</span>
  </label>
</div>

<script lang="ts" context="module">
  export type T = Obj;
</script>

<script lang="ts" generics="T extends Obj">
  import type {Obj, PartialWritableErrors} from '@felte/common';

  // PROPS =================================================================================================================================
  export let errors: PartialWritableErrors<T>;
  export let field: Extract<keyof T, string>;
  export let formId: string;
  export let label: string;
  export let type: HTMLInputElement['type'] = 'text';

  // VARS ==================================================================================================================================
  $: error = $errors[field];
  $: id = `${formId}_${field}`;

  // STYLES ================================================================================================================================
  let cEl = '';
  export {cEl as class};
</script>
