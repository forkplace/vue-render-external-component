import type { App, Component } from "vue";
import ThemeWrapperVue from "./ThemeWrapper.vue";

type Framework = {
  app: App;
  externalComponents: {
    ThemeWrapper: Component;
    MenuLauncher: Component;
  };
};

// const w = window as unknown as Framework;
const w = window as any;
w.externalComponents = w.externalComponents || {};
w.externalComponents.ThemeWrapper = ThemeWrapperVue;
