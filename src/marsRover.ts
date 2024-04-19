export class Rover {
    private facing: string;
    private posX: number;
    private posY: number;

    constructor() {
        this.facing = "N";
        this.posX = 0;
        this.posY = 0;
    }

    move(): void {
        switch(this.facing){
            case "N":
                this.posY++;
                break;
            case "E":
                this.posX++;
                break;
            case "S":
                this.posY--;
                break;
            case "W":
                this.posX--;
                break;
        }
    }

    rotateLeft(): void {

    }

    rotateRight(): void {

    }

    getPosition(): string {
        return `${this.posX}:${this.posY}:${this.facing}`
    }

    operateMarsRover(instruction: string): void {
        for (let i: number = 0; i < instruction.length; i++){
            if (instruction[i] === "M"){
                this.move();
            }
        }
    }
}