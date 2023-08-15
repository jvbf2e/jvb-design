export const toKebabCase = (string: string): string =>
  string.replace(
    /[A-Z]+/g,
    (match, offset) => `${offset > 0 ? '-' : ''}${match.toLocaleLowerCase()}`
  )

export const toPascalCase = (string: string): string =>
  string
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/-(.)/g, (_match, p1: string) => p1.toLocaleUpperCase())
