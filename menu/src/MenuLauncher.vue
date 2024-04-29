<template>
  <div class="vite-menu-plugin-build">
    <div>This is dynamic menu launcher!</div>
    <div style="color: blue" v-if="test1">Is Rendered from MenuLauncher</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MenuLauncher",
  setup() {
    return {
      test1: true,
    };
  },
};
</script>
