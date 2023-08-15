import type { App, Plugin } from 'vue'
import type { JvbOptions } from './_types'

import Button, { ButtonGroup } from './button'

const components: Record<string, Plugin> = {
  Button,
}

const install = (app: App, options?: JvbOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

const JvbVue = {
  ...components,
  ButtonGroup,
  install,
}

export default JvbVue
