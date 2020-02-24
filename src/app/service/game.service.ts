import { Injectable } from '@angular/core';
import { Cell } from '../class/Cell';
import * as cellParam from 'src/assets/cellParam.json'

@Injectable({
    providedIn: 'root'
})
export class GameService {

    /** 地图格子数 */
    mapSize: number = 200
    /** 单元格 */
    cells: Array<Cell>

    constructor() {
        // 获取所有的格子信息
        this.cells = new Array<Cell>()
        let t_cells: any[] = cellParam.default
        t_cells.forEach(element => {
            let x: number = Math.floor(element.编号 / this.mapSize)
            let y: number = element.编号 % this.mapSize
            this.cells.push(new Cell(x, y, element.地形, element.区域))
        })

        this.cells = this.cells.slice(0, this.mapSize * this.mapSize)
    }

    /**
     * 获取所有的表格信息
     */
    getCells(): Array<Cell> {
        return this.cells
    }
}
