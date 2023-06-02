export function randomInteger(max) {
  let rand = 0 - 0.5 + Math.random() * (max - 0 + 1);
  return Math.round(rand);
}
