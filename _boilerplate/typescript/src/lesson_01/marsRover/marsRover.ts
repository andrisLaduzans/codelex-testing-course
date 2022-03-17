interface Location {
  x: number;
  y: number;
}

const directions = ["N", "S", "E", "W"] as const;
type Direction = typeof directions[number];

type Grid = [number, number];

export const marsRover = (
  location: Location,
  direction: Direction,
  grid: Grid
) => {
  const currentLocation = location;

  return {
    location: currentLocation,
  };
};
