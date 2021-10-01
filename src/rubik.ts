import * as THREE from "three"
import {getSmallCube} from "./small-cube";
import {COLORS} from "./constants";
import {CubeColors} from "./types";

const {RED, GREEN, BLUE, YELLOW, WHITE, ORANGE} = COLORS

const DELTA = 1.2

type Index = -1 | 0 | 1

const getColor = (i: Index, j: Index, k: Index): CubeColors => {
    const result: CubeColors = {}

    if (i < 0) {
        result.left = GREEN
    }
    else if (i > 0) {
        result.right = BLUE
    }

    if (j < 0) {
        result.bottom = YELLOW
    }
    else if (j > 0) {
        result.top = WHITE
    }

    if (k > 0) {
        result.face = RED
    }
    else if (k < 0) {
        result.back = ORANGE
    }

    return result
}

class Rubik {

    mainGroup: THREE.Group

    constructor() {
        this.mainGroup = new THREE.Group()
        this.generateCubes()
    }

    generateCubes = () => {

        for (let i: Index =-1; i <= 1; i++)
            for (let j: Index =-1; j <= 1; j++)
                for (let k: Index =-1; k <= 1; k++) {
                    if (i || j || k) {
                        // @ts-ignore
                        this.mainGroup.add(getSmallCube({x: DELTA * i, y: DELTA * j, z: DELTA * k}, getColor(i, j, k)))
                    }
                }
    }
}

export default Rubik
