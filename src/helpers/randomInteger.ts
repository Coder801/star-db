const randomInteger = (min: number = 0, max: number = 1): number =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

export default randomInteger;
