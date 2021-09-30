import * as THREE from "three"
import {getSmallCube} from "./small-cube";
import {COLORS} from "./constants";

const DELTA = 1.2

class Rubik {

    mainGroup: THREE.Group

    constructor() {
        this.mainGroup = new THREE.Group()
        this.generateCubes()
    }

    generateCubes = () => {

        this.mainGroup.add(
            getSmallCube(
                {x: 0, y: 0, z: 0},
                {
                    face: COLORS.RED,
                    left: COLORS.GREEN,
                    bottom: COLORS.YELLOW,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: DELTA, y: 0, z: 0},
                {
                    face: COLORS.RED,
                    bottom: COLORS.YELLOW,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: 2 * DELTA, y: 0, z: 0},
                {
                    face: COLORS.RED,
                    bottom: COLORS.YELLOW,
                    right: COLORS.BLUE,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: 0, y: DELTA, z: 0},
                {
                    face: COLORS.RED,
                    left: COLORS.GREEN,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: DELTA, y: DELTA, z: 0},
                {
                    face: COLORS.RED,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: 2 * DELTA, y: DELTA, z: 0},
                {
                    face: COLORS.RED,
                    right: COLORS.BLUE,
                }
            )
        )




        this.mainGroup.add(
            getSmallCube(
                {x: 0, y: 2 * DELTA, z: 0},
                {
                    face: COLORS.RED,
                    left: COLORS.GREEN,
                    top: COLORS.WHITE,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: DELTA, y: 2 * DELTA, z: 0},
                {
                    face: COLORS.RED,
                    top: COLORS.WHITE,
                }
            )
        )

        this.mainGroup.add(
            getSmallCube(
                {x: 2 * DELTA, y: 2* DELTA, z: 0},
                {
                    face: COLORS.RED,
                    top: COLORS.WHITE,
                    right: COLORS.BLUE,
                }
            )
        )

    }
}

export default Rubik
