import { assignConnectors } from "./assignConnectors";

describe("pipes.assignConnectors", () => {
  it("constructor should know how to assign connectors to each shape, with 4 number arrays indicating left/up/right/down", () => {
    const end = assignConnectors("end");
    expect(end).toEqual([0, 0, 0, 1]);

    const corner = assignConnectors("corner");
    expect(corner).toEqual([0, 0, 1, 1]);

    const straight = assignConnectors("straight");
    expect(straight).toEqual([1, 0, 1, 0]);

    const tri = assignConnectors("tri");
    expect(tri).toEqual([1, 0, 1, 1]);
  });
});
