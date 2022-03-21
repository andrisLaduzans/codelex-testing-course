export const neverReach = (never: never) => {
  throw new Error(never);
};
