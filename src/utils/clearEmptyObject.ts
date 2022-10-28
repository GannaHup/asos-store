export const clearEmptyObject = (object: {
  [x: string]: number | string | string[] | undefined | any
}) => {
  const cleanedObject: { [x: string]: string | string[] | undefined | any } = {}
  Object.keys(object).forEach((key: string) => {
    if (
      (!object[key] && typeof object[key] !== 'number') ||
      object[key] === '[]' ||
      object[key] === 'undefined'
    ) {
      return
    }
    cleanedObject[key] = object[key]
  })
  return cleanedObject
}

export default clearEmptyObject
