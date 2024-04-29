<template>
  <div class="vite-theme-plugin-build">
    <component :is="menuLauncherComponent"></component>
    <div style="color: red" v-if="test1">Is Rendered from Theme Wrapper</div>
  </div>
</template>

<script lang="ts">
import type { App, Component } from "vue";

type Framework = {
  app: App;
  externalComponents: {
    ThemeWrapper: Component;
    MenuLauncher: Component;
  };
};

export default {
  name: "ThemeWrapper",
  data() {
    return {
      menuLauncherComponent: null,
    };
  },
  setup() {
    return {
      test1: true,
    };
  },
  mounted() {
    this.menuLauncherComponent = (
      window as any
    ).externalComponents.MenuLauncher;
  },
};
</script>
