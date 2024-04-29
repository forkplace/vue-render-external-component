import type { App, Component } from "vue";

import MenuLauncherVue from "./MenuLauncher.vue";

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
w.externalComponents.MenuLauncher = MenuLauncherVue;
