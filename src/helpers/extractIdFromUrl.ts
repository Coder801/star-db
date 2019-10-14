const extractIdFromUrl = (url: string): number => {
  const pattern: RegExp = /([0-9*]*)(\/)?$/;
  const matches: RegExpMatchArray | null = url.match(pattern);

  if (!matches) {
    return 0;
  }
  const id: string = matches[1] || "0";
  return parseInt(id);
};

export default extractIdFromUrl;
