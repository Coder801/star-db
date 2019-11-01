const getCategotyFromUrl = (url: string) : string => {
  return url.replace(/^\/(\w*).*/g, "$1")
}

export default getCategotyFromUrl