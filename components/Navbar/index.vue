<template>
  <nav class="flex sm:justify-start md:justify-between md:items-center | h-15 px-4.5 md:px-16 | border-b border-lh-gray">
    <img class="hidden md:block" src="~/assets/images/lh-logo-desktop.svg" alt="La Haus Logo" title="La Haus Logo"/>
    <ul class="hidden md:flex">
      <li v-for="item in menuItems" :key="item.id">
        <NuxtLink class="mr-10 text-jungle-green" :to="item.path">{{item.name}}</NuxtLink>
      </li>
      <li>
        <NuxtLink class="mx-2.5 text-jungle-green font-semibold" to="/">{{$t('myProfile')}}</NuxtLink>
        <HausIcon icon-name="arrow-down" custom-icon-style="text-xs text-green-gray" />
      </li>
    </ul>
    <div class="flex md:hidden">
      <div class="mt-3">
        <HausIcon icon-name="bars" custom-icon-style="text-2xl text-green-gray" />
      </div>
      <img class="h-8 ml-2.5 my-3.5" src="~/assets/images/lh-logo-mobile.svg" alt="La Haus Logo" title="La Haus Logo" />
    </div>
  </nav>
</template>

<script lang="ts">
// Dependencies
import { Vue, Component } from 'nuxt-property-decorator';

// Mocks
import menuItemsMock from './mocks/menuConfig.json';

// Interfaces
export interface IMenuItem {
  id: number;
  name: string;
  path: string;
};

@Component
export default class Navbar extends Vue {
  public menuItems: Array<IMenuItem> = menuItemsMock;
}
</script>
