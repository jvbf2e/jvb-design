import type { App } from 'vue'
import type { JvbOptions } from '../_types'

const COMPONENT_PREFIX = 'J'
// const CLASS_PREFIX = 'jvb'
const GLOBAL_CONFIG_NAME = '$jvb'

export const getComponentPrefix = (options?: JvbOptions) =>
  options?.componentPrefix ?? COMPONENT_PREFIX

export const setGlobalConfig = (app: App, options?: JvbOptions): void => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    }
  }
}
