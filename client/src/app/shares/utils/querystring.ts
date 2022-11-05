export const stringify = (params: Record<string, any>) => {
  const url = new URLSearchParams(params)
  return url.toString()
}

export const parse = (str: string) => {
  const url = new URLSearchParams(str)
  return [...Object(url).entries()].reduce(
    (obj, [key, value]) => ({ ...obj, [key]: value }),
    {},
  )
}

export const querystring = {
  stringify,
  parse,
}
