export const toSnakeCase = (input: string) => {
  return (
    input[0].toLowerCase() +
    input
      .slice(1, input.length)
      .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  )
}
