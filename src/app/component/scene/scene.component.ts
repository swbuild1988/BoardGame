import { Component, OnInit } from '@angular/core'
import { Cell } from 'src/app/class/Cell'
import * as cellParam from 'src/assets/cellParam.json'
import { GameService } from 'src/app/service/game.service'

@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

    /** 每个单元格大小 */
    cellSize: number = 40
    /** 单元格显示信息 */
    cellMessage: string = ''

    /** 视觉起始坐标x */
    view_x: number = 100
    /** 视觉起始坐标y */
    view_y: number = 100
    /** 图像大小（0.5~2） */
    view_scale: number = 0.2

    isMouseDown: boolean = false
    mouseDown_x: number = 0
    mouseDown_y: number = 0

    constructor(public gameService: GameService) { }

    ngOnInit(): void {
        this.drawMap()
    }

    /** 初始化地图 */
    drawMap() {

    }

    /** 鼠标进入 */
    rectMouseEnter(cell: Cell) {
        this.cellMessage = "地形: " + cell.type
            + " (" + cell.city + ")      "
            + "坐标:   " + cell.x + "," + cell.y
    }

    /** 鼠标离开 */
    rectMouseLeave() {
        this.cellMessage = ""
    }

    /** 鼠标按下 */
    svgMouseDown(e: MouseEvent) {
        console.log("mouseDown", e)
        this.isMouseDown = true
        this.mouseDown_x = e.x
        this.mouseDown_y = e.y
    }

    /** 鼠标抬起 */
    svgMouseUp(e: MouseEvent) {
        console.log("mouseUp", e)
        this.isMouseDown = false
    }

    /** 鼠标移动 */
    svgMouseMove(e: MouseEvent) {
        if (this.isMouseDown) {
            this.view_x += e.x - this.mouseDown_x
            this.mouseDown_x = e.x
            this.view_y += e.y - this.mouseDown_y
            this.mouseDown_y = e.y
        }
    }

    /** 鼠标滚动 */
    svgMouseWheel(e: any) {
        console.log("mouseWheel", e)
        if (e.wheelDelta > 0) {             // 放大
            this.view_scale = Math.min(3, this.view_scale + 0.2)
        } else {                        // 缩小
            this.view_scale = Math.max(0.2, this.view_scale - 0.2)
        }
    }

}
