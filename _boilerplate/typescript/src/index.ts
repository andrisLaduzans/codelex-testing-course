import { greeter, Render, Pipes } from "./lesson_01_homework/pipes";

const pipes = new Render({
  board: document.getElementById("pipes-board"),
  autoSolve: document.getElementById("pipes-auto-solve"),
  game: new Pipes(3),
});

pipes.draw();

const pipesLarge = new Render({
  board: document.getElementById("pipes-board-large"),
  autoSolve: document.getElementById("pipes-auto-solve-large"),
  game: new Pipes(4),
});

pipesLarge.draw();
