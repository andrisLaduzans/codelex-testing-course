import { assignConnectors } from "./methods";
import { getNewMatrixRotateCell } from "./methods/rotateCell";
import { Cell, Position, Shape } from "./types";

const bShape: Shape[][] = [
  ["end", "corner", "corner", "corner"],
  ["corner", "tri", "tri", "end"],
  ["straight", "end", "tri", "end"],
  ["end", "end", "tri", "corner"],
];

const aShape: Shape[][] = [
  ["corner", "corner", "end"],
  ["end", "corner", "tri"],
  ["end", "straight", "corner"],
];

export class Pipes {
  private shapes: Shape[][];

  matrix: Cell[][];

  constructor(size: 3 | 4) {
    if (size === 3) {
      this.shapes = aShape;
    } else {
      this.shapes = bShape;
    }

    this.matrix = this.shapes.reduce((acc: Cell[][], row: Shape[]) => {
      const newRow = row.map(
        (shape: Shape): Cell => ({
          shape,
          connectors: this.assignConnectors(shape),
        })
      );
      acc.push(newRow);
      return acc;
    }, []);
  }

  assignConnectors = assignConnectors;

  getShapes = () => {
    return this.shapes;
  };

  getCell = ({ x, y }: Position): Cell => {
    return this.matrix[x][y];
  };

  rotateCell = ({ x, y }: Position) => {
    this.matrix = getNewMatrixRotateCell(this.matrix, { x, y });
    return this.matrix[x][y];
  };
}

export function greeter() {
  alert("hello world form pipes");
}
