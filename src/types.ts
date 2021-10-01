export type ColorsDict = {
    [key: string]: number
}

export interface CubeColors {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
    face?: number,
    back?: number,
}

export interface Position {
    x: number,
    y: number,
    z: number
}
