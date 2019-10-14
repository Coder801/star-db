const joinImagePathUrl = (() => {
  const joinPath = (path: string[]) => path.join("/");
  return {
    jpg: (...path: string[]) => joinPath(path) + ".jpg"
  };
})();

export default joinImagePathUrl;
