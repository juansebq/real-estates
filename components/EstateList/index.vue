<template>
  <div class="flex flex-col justify-center items-center mb-20">
    <p class="my-15 text-jungle-green text-3xl font-semibold">{{$t('favoritesList')}}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-15">
      <EstateInfo v-for="estate in estates" :key="estate.id" :estate="estate" />
      <NewListOption />
    </div>
  </div>
</template>

<script lang="ts">
// Dependencies
import { Vue, Component } from 'nuxt-property-decorator';

// Services
import realEstatesService from '~/services/realEstates';

// Interfaces
import { IRealEstates } from '~/services/realEstates/interfaces';

@Component
export default class EstateList extends Vue {
  public estates: IRealEstates[] = [];

  async fetch() {
    this.estates = await realEstatesService.getCollectionList();
  }
}
</script>
