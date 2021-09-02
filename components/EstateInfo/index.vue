<template>
  <div>
    <CardImage :images="estate.covers" />
    <p class="mt-5 font-semibold text-jungle-green">{{estate.name}}</p>
    <p class="mt-3 font-normal text-green-gray text-base">{{$tc('saved', estate.covers.length)}}</p>
  </div>

</template>

<script lang="ts">
// Dependencies
import { Vue, Component, Prop } from 'nuxt-property-decorator';

// Interfaces
import { IRealEstates } from '~/services/realEstates/interfaces';

@Component
export default class EstateInfo extends Vue {
  @Prop({ required: true }) readonly estate!: IRealEstates;
}
</script>
