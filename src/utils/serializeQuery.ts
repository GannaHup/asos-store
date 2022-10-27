import { toSnakeCase } from "./toSnakeCase"

export const serializeQuery = (query: Record<string, string | number | boolean>) => {
  return Object.keys(query)
    .map(key => {
      const formattedKey = toSnakeCase(key)
      return `${encodeURIComponent(formattedKey)}=${query[key]}`
    })
    .join("&")
}
