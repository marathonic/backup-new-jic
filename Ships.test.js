import { Ship } from "./Ship";
import { Gameboard } from "./Gameboard";

// test("creates ships", () => {
//   let destroyer = Ship("destroyer");
//   expect(destroyer.getLength()).toBe(1);
//   expect(destroyer.isSunk()).toBeFalsy();
// });

// test("Ship runs hit function", () => {
//   let destroyer = Ship("destroyer");
//   expect(destroyer.hit("S1")).toMatch("S1 added to previouslyHit array");
// });

test("Creates ships from Gameboard", () => {
  let board = Gameboard();
  board.placeShip("destroyer", "A1");
  board.placeShip("submarine", "2D", "3D");
  console.debug(board.shipsPls());
  console.debug(board.receiveAttack("3D"));
  console.debug(board.receiveAttack("2D"));
  console.debug(board.receiveAttack("A1"));
});
