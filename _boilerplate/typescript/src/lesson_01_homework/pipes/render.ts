import { Pipes } from "./pipes";
import { Cell, Direction, Shape } from "./types";
import { neverReach } from "./utils";

export class Render {
  entry: HTMLElement;
  autoSolveBtn: HTMLElement;
  game: Pipes;

  constructor({
    board,
    autoSolve,
    game,
  }: {
    board: HTMLElement;
    autoSolve: HTMLElement;
    game: Pipes;
  }) {
    this.entry = board;
    this.autoSolveBtn = autoSolve;
    this.game = game;

    this.autoSolveBtn.addEventListener("click", this.autoSolve);
  }

  appendItem = (entry: HTMLElement, className: "cell" | "row") => {
    const newRow = document.createElement("div");
    newRow.className = className;
    entry.appendChild(newRow);

    return newRow;
  };

  drawShape = (entry: HTMLElement, shape: Shape) => {
    entry.classList.add(shape);
  };

  rotate = (element: HTMLElement, direction: Direction) => {
    let transform = "rotate(0deg)";

    switch (direction) {
      case "down": {
        transform = "rotate(0deg)";
        break;
      }
      case "left": {
        transform = "rotate(90deg)";
        break;
      }
      case "up": {
        transform = "rotate(180deg)";
        break;
      }
      case "right": {
        transform = "rotate(-90deg)";
        break;
      }
      default: {
        neverReach(direction);
        throw new Error(`invalid direction passed to Render.rotate`);
      }
    }
    element.style.transform = transform;
  };

  draw = () => {
    const matrix = this.game.matrix;

    matrix.map((row, rowIndex) => {
      const rowElement = this.appendItem(this.entry, "row");

      row.map((cell, cellIndex) => {
        const cellElement = this.appendItem(rowElement, "cell");

        this.drawShape(cellElement, cell.shape);

        cellElement.addEventListener("click", () => {
          const { direction } = this.game.rotateCell({
            x: rowIndex,
            y: cellIndex,
          });

          this.rotate(cellElement, direction);
        });
      });
    });
  };

  autoSolve = () => {
    console.log("autosolve");
  };
}
