class Horloge {
    constructor(container) {
        this._container = container;
    }
    update() {
        this._container.innerHTML = (new Date()).toLocaleString();
    }
    start() {
        this.update();
        setInterval(this.update.bind(this), 1000);
    }
}
