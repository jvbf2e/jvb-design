import path from 'path'
import fs from 'fs-extra'

const CONFIG_DIR = '.config'

export const getUserConfig = async (name: string) => {
  const filename = path.resolve(process.cwd(), CONFIG_DIR, name)
  try {
    await fs.access(filename)
    // eslint-disable-next-line import/no-dynamic-require, global-require
    return require(filename)
  } catch {
    return undefined
  }
}
