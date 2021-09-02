<template>
  <div class="relative inline-block">
    <span :class="iconClass"></span>
    <span v-if="hasBadge" :class="badgeClass"></span>
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
  @Prop({ default: 'transform translate-x-2/3 -translate-y-1.5' }) readonly customTranslate!: string;

  get iconClass() : string {
    return `icon-${this.iconName} ${this.customIconStyle}`
  }

  get badgeClass(): string {
    return `absolute top-0 right-0 | inline-block w-3 h-3 | bg-caribbean-green rounded-full | ${this.customTranslate}`;
  }
}
</script>
