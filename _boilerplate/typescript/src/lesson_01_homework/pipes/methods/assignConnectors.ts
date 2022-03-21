import { Shape, Connectors, shapes } from "../types";
import { neverReach } from "../utils";

export const assignConnectors = (shape: Shape): Connectors => {
  switch (shape) {
    case "corner": {
      return [0, 0, 1, 1];
    }
    case "end": {
      return [0, 0, 0, 1];
    }
    case "straight": {
      return [1, 0, 1, 0];
    }
    case "tri": {
      return [1, 0, 1, 1];
    }
    default: {
      neverReach(shape);
      throw new Error(
        `invalid shape passed to assignConnectors method, accepted shapes are: ${JSON.stringify(
          shapes
        )}, but received: ${shape}`
      );
    }
  }
};
