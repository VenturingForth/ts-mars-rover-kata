import { marsRover } from "../src/marsRover";

describe("Mars Rover Kata Tests", () => {
    test("Empty instructions should return the default starting position of the Rover", () => {
        //arrange
        const instruction: string = "";
        //act
        const result: string = marsRover(instruction);
        //assert
        expect(result).toBe("");
    })
})