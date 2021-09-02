<template>
  <div class="flex w-73 h-49 m-20 relative">
    <div v-if="images.length === 0" class="w-full h-full overflow-hidden rounded-lg">
      <img class="object-cover w-full h-full" src="~/assets/images/lh-empty-estate.svg" alt="Empty Estate" title="Empty Estate" />
    </div>
    <div v-for="(image, index) in formattedImages.urls" :key="index" :class="cardClasses[formattedImages.total][index]">
      <nuxt-img
        class="object-cover w-full h-full"
        :src="formattedImages.urls[index]"
        alt="Estate"
        title="Estate"
      />
    </div>
    <div v-if="images.length >= 3" class="w-full ml-52 h-full pr-1 rounded-lg relative z-10 flex justify-end items-center bg-overlay">
      <p class="text-white text-sm font-semibold mr-4">{{`+${images.length - 2}`}}</p>
    </div>
  </div>
</template>

<script lang="ts">
// Dependencies
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class CardImage extends Vue {
  @Prop({ default: () => [] }) readonly images!: String[];

  get cardClasses(): object {
    const commonClasses = 'h-full overflow-hidden rounded-lg';
    const borderClasses: string = 'border-r border-white';
    const classes: object = {
      1: [`w-full absolute z-30 ${borderClasses} ${commonClasses}`],
      2: [
        `w-38 absolute z-30 ${borderClasses} ${commonClasses}`,
        `w-full absolute z-20 ${borderClasses} ${commonClasses}`,
      ],
      3: [
        `w-38 absolute z-30 ${borderClasses} ${commonClasses}`,
        `w-30 ml-31 absolute z-20 ${borderClasses} ${commonClasses}`,
        `w-31.5 ml-42 absolute z-10 ${borderClasses} ${commonClasses}`
      ]
    };

    return classes;
  }

  get formattedImages(): object {
    const urls = this.images.slice(0, 3);
    const total = urls.length;

    return {
      urls,
      total,
    };
  }
}
</script>
