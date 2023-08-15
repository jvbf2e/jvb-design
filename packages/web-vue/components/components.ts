// @ts-nocheck
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JButton: typeof import('@jvbjs/jvb-design-web-vue')['Button']
    JButtonGroup: typeof import('@jvbjs/jvb-design-web-vue')['ButtonGroup']
  }
}

export {}
