<template>
  <div class="w-73">
    <div class="flex h-49 justify-center items-center rounded-lg bg-md-blue cursor-pointer">
      <HausIcon icon-name="add" :has-badge="false" custom-icon-style="text-4xl text-sky-blue" />
    </div>
    <p class="mt-5 text-center font-medium text-sky-blue">{{$t('createList')}}</p>
  </div>

</template>

<script lang="ts">
// Dependencies
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class NewListOption extends Vue {}
</script>
