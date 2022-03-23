import { Cell, Position } from "../types";

export const getNewMatrixRotateCell = (
  matrix: Cell[][],
  { x, y }: Position
) => {
  const newMatrix: Cell[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    const newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let cell = matrix[i][j];
      const { direction } = cell;

      if (i === x && j === y) {
        const connectors = cell.connectors;

        const last = connectors.pop();

        if (last !== undefined) {
          connectors.unshift(last);
        }
        cell = {
          ...matrix[i][j],
          connectors: [...connectors],
          direction:
            direction === "down"
              ? "left"
              : direction === "left"
              ? "up"
              : direction === "up"
              ? "right"
              : "down",
        };
      }
      newRow.push(cell);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
};
