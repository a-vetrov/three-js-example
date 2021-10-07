import {COLORS} from "../constants";
import * as THREE from "three";

type MaterialsDict = {
    [key: string | number ]: THREE.MeshStandardMaterial
}

const materials = Object.keys(COLORS).reduce((accumulator, key) => {
    const color = COLORS[key]
    accumulator[color] = accumulator[key] = new THREE.MeshStandardMaterial( { color } )
    return accumulator
}, {} as MaterialsDict)

export const getMaterial = (colorName: string | number) => materials[colorName]
