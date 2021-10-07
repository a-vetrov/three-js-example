import * as THREE from "three"
import {getSmallCube} from "./small-cube";
import {COLORS} from "../constants";
import {CubeColors} from "../types";
import {Camera, Raycaster, Vector2} from "three";

const {RED, GREEN, BLUE, YELLOW, WHITE, ORANGE} = COLORS

const DELTA = 1.2
const NAME_DELIMITER = '#'

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

    mainGroup: THREE.Group = new THREE.Group()

    cubes: THREE.Mesh[] = []

    domElement: HTMLCanvasElement

    camera: Camera

    raycaster = new Raycaster()

    constructor(domElement: HTMLCanvasElement, camera: Camera) {
        this.domElement = domElement
        this.camera = camera
        this.generateCubes()
    }

    registerMouseEvents = () => {
        this.domElement.addEventListener( 'pointerdown', this.onPointerDown )

    }

    unregisterMouseEvents = () => {
        this.domElement.removeEventListener( 'pointerdown', this.onPointerDown )
    }

    getPointer = (event: PointerEvent): Vector2 => {

        const rect = this.domElement.getBoundingClientRect()

        const x = ( event.clientX - rect.left ) / rect.width * 2 - 1
        const y = - ( event.clientY - rect.top ) / rect.height * 2 + 1

        return  new Vector2(x ,y)
    }

    onPointerDown = (e: PointerEvent) => {
        console.log(this.getPointer(e))

        this.raycaster.setFromCamera( this.getPointer(e), this.camera )
        const intersections = this.raycaster.intersectObjects( this.cubes, true);

        if (intersections.length) {
            const selection = intersections[0].object
            selection.visible = false
        }

        console.log(intersections)
    }

    generateCubes = () => {

        for (let i: Index =-1; i <= 1; i++)
            for (let j: Index =-1; j <= 1; j++)
                for (let k: Index =-1; k <= 1; k++) {
                    if (i || j || k) {
                        // @ts-ignore
                        const cube = getSmallCube({x: DELTA * i, y: DELTA * j, z: DELTA * k}, getColor(i, j, k))
                        cube.name = [i, j, k].join(NAME_DELIMITER)
                        this.cubes.push(cube)
                        this.mainGroup.add(cube)
                    }
                }
    }
}

export default Rubik
