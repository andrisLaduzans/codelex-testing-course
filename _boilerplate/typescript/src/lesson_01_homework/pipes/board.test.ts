import { Pipes } from "./pipes";

describe("board", () => {
  it("should draw a 4 x 4 matrix", () => {
    const board = new Pipes(4);
    const matrix = board.getShapes();
    expect(matrix).toEqual([
      ["end", "corner", "corner", "corner"],
      ["corner", "tri", "tri", "end"],
      ["straight", "end", "tri", "end"],
      ["end", "end", "tri", "corner"],
    ]);
  });

  it("constructor should generate connectors for matrix", () => {
    const board = new Pipes(4);
    const cell0 = board.getCell({ x: 0, y: 0 });
    expect(cell0.connectors).toEqual([0, 0, 0, 1]);
  });

  it("cell should be able to rotate clockwise", () => {
    const board = new Pipes(4);
    const tri = board.rotateCell({ x: 1, y: 1 });
    expect(tri.connectors).toEqual([1, 1, 0, 1]);
  });

  it("should be able to draw smaller 3x3 matrix", () => {
    const board = new Pipes(3);
    const shapes = board.getShapes();
    expect(shapes).toEqual([
      ["corner", "corner", "end"],
      ["end", "corner", "tri"],
      ["end", "straight", "corner"],
    ]);
  });
});
