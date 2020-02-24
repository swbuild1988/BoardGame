import { Cell } from './Cell'

/**
 * 定义方框二维数组，提供相关操作
 */
export class Cell2DArray {

    private cell2DArray: Array<Array<Cell>> = new Array<Array<Cell>>()
    private rows: number
    private columns: number

    /**
     * 初始化数组
     */
    public constructor(rows: number, columns: number, value: Cell) {
        this.rows = rows
        this.columns = columns
        this.initRows(rows)
        this.initColumns(columns, value)

    }

    /**
     * 取数组中的值
     */
    public getValue(rows: number, columns: number): Cell {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return null
        }
        return this.cell2DArray[rows][columns]
    }

    /**
     * 为数组赋值
     */
    public setValue(rows: number, columns: number, value: Cell): void {
        if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
            return
        }
        this.cell2DArray[rows][columns] = value
    }

    /**
     * 初始化行数
     */
    private initRows(rows: number): void {
        if (rows < 1) {
            return
        }
        for (let i = 0; i < rows; i++) {
            this.cell2DArray.push(new Array<Cell>())
        }
    }

    /**
     * 初始化列数
     */
    private initColumns(columns: number, value: Cell): void {
        if (columns < 1) {
            return
        }
        for (let i = 0; i < this.cell2DArray.length; i++) {
            for (let j = 0; j < columns; j++) {
                this.cell2DArray[i].push(value)
            }
        }
    }


    /**
     * 获取数组
     */
    public getArray(): Array<Array<Cell>> {
        return this.cell2DArray
    }
}