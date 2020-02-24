import { CellType } from './type/cellType'

/**
 * 格子
 */
export class Cell {
    /** x */
    x: number
    /** y */
    y: number
    /** 
     * 类型 
     * type: CellType
     */
    type: string
    /** 所属城市 */
    city: string

    constructor(x: number, y: number, type: string, city: string) {
        this.x = x
        this.y = y
        this.type = type
        this.city = city
    }

}