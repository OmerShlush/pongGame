const SPEED = .02
export default class Paddle {
    paddleElement: HTMLElement
    constructor(paddleElement: HTMLElement) {
        this.paddleElement = paddleElement
        this.reset()
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElement).getPropertyValue("--position"))
    }

    set position(value) {
        this.paddleElement.style.setProperty("--position", value.toString())
    }

    update(delta: number, ballHeight: number) {
        this.position += SPEED * delta * +(ballHeight - this.position)
    }

    rect() {
        return this.paddleElement.getBoundingClientRect()
    }
    reset() {
        this.position = 50
    }
}