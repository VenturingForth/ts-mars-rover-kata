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
        switch(this.facing){
            case "N":
                this.facing = "W";
                break;
            case "E":
                this.facing = "N";
                break;
            case "S":
                this.facing = "E";
                break;
            case "W":
                this.facing = "S";
                break;
        }
    }

    rotateRight(): void {
        switch(this.facing){
            case "N":
                this.facing = "E";
                break;
            case "E":
                this.facing = "S";
                break;
            case "S":
                this.facing = "W";
                break;
            case "W":
                this.facing = "N";
                break;
        }
    }

    getPosition(): string {
        return `${this.posX}:${this.posY}:${this.facing}`
    }

    operateMarsRover(instruction: string): void {
        for (let i: number = 0; i < instruction.length; i++){
            if (instruction[i] === "M"){
                this.move();
            }
            if (instruction[i] === "L"){
                this.rotateLeft();
            }
            if (instruction[i] === "R"){
                this.rotateRight();
            }
        }
    }
}