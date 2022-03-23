export const shapes = ["end", "corner", "tri", "straight"] as const;
export type Shape = typeof shapes[number];

export const directions = ["up", "down", "left", "right"] as const;
export type Direction = typeof directions[number];

export type Connectors = [number, number, number, number];

export type Cell = {
  direction: Direction;
  connectors: Connectors;
  shape: Shape;
  isOrigin?: boolean;
  isConnected?: boolean;
};

export type Position = {
  x: number;
  y: number;
};
