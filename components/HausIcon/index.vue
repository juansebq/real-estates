<template>
  <div class="relative inline-block">
    <span :class="iconClass"></span>
    <span v-if="hasBadge" class="absolute top-0 right-0 | inline-block w-3 h-3 | transform translate-x-1/2 -translate-y-1 | bg-caribbean-green rounded-full"></span>
  </div>
</template>

<script lang="ts">
// Dependencies
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class HausIcon extends Vue {
  @Prop({ required: true }) readonly iconName!: string;
  @Prop({ default: true }) readonly hasBadge!: boolean;
  @Prop(String) readonly customIconStyle: String | undefined;

  get iconClass() : string {
    return `icon-${this.iconName} ${this.customIconStyle}`
  }
}
</script>
