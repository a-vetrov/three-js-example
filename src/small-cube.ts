import * as THREE from "three";
import {COLORS} from "./constants";
import {getMaterial} from "./materials";

interface CubeColors {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    face?: number,
    back?: number,
}

interface Position {
    x: number,
    y: number,
    z: number
}

const getMaterialArray = (colors:CubeColors) => [
    getMaterial(colors.right || COLORS.BLACK),
    getMaterial(colors.left || COLORS.BLACK),
    getMaterial(colors.top || COLORS.BLACK),
    getMaterial(colors.bottom || COLORS.BLACK),
    getMaterial(colors.face || COLORS.BLACK),
    getMaterial(colors.back || COLORS.BLACK),
]

export const getSmallCube = (position: Position, colors:CubeColors) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const cube = new THREE.Mesh(geometry, getMaterialArray(colors))
    cube.position.set( position.x, position.y, position.z );
    return cube
}
