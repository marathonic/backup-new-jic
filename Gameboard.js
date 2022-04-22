import { Ship } from "./Ship";

export function Gameboard() {
  let shipsHere = [];
  let ship;
  return {
    placeShip(shipModel, ...coordies) {
      ship = Ship(shipModel);
      let coordinates = coordies;
      // <-- register [{destroyer: 'A7'}, {anotherShip: 'coordinates'}, {etc...}];
      let obj = {};
      obj.ship = ship.getName();
      obj.positions = coordinates;
      shipsHere.push(obj); // <-- store each {ship:coord} inside [shipsHere];
      // if (shipsHere.length < 1) shipsHere.push({});
      return { ship, coordinates, shipsHere };
    },
    shipsPls() {
      return shipsHere;
    },
    receiveAttack(coordinates) {
      try {
        //<-- if position has been hit before, => false
        if (shipsHere.some((e) => e.positions.includes(coordinates))) {
          //<--- CURRENTLY, WE'RE TARGETING OUR VARIABLE <SHIP> which is always the most recently created ship
          let targetShip; // <-- We need to update the ship we're targeting to be the one at the current coordinates
          if (ship.isSunk()) return `${ship.getName()} is sunk`;
          // if a ship was ever placed at these coordinates
          if (ship.hit(coordinates)) {
            // => false on repeat hits, true otherwise
            if (ship.isSunk()) return `${ship.getName()} has been sunk`;
            return `${ship.getName()} HP: ${ship.getLength()}`;
          }
        } else {
          return false; // <-- player hit the water, there's no ships there
        }
      } catch (err) {
        return err;
      }
    },
  };
}
