import { Rover } from "../src/marsRover";

describe("Mars Rover Kata Tests", () => {
    test("Empty instructions should return the default starting position of the Rover", () => {
        //arrange
        const rover = new Rover;
        const instruction: string = "";
        //act
        rover.operateMarsRover(instruction);
        //assert
        expect(rover.getPosition()).toBe("0:0:N");
    })
    test("An instruction of 'M' should move the rover one square in the direction of its facing", () => {
        //arrange
        const rover = new Rover;
        const instruction: string = "M";
        //act
        rover.operateMarsRover(instruction);
        //assert
        expect(rover.getPosition()).toBe("0:1:N")
    })
    test("An instruction of 'L' should rotate the facing of the rover by 90 degrees to the left", () => {
        //arrange
        const rover = new Rover;
        const instruction: string = "L"
        //act
        rover.operateMarsRover(instruction);
        //assert
        expect(rover.getPosition()).toBe("0:0:W")
    })
    test("An instruction of 'R' should rotate the facing of the rover by 90 degrees to the right", () => {
        //arrange
        const rover = new Rover;
        const instruction: string = "R"
        //act
        rover.operateMarsRover(instruction);
        //assert
        expect(rover.getPosition()).toBe("0:0:E");
    })
    test("A combined movement and rotation instruction should return the correct coordinates and facing of the rover", () => {
        //arrange
        
    })
})