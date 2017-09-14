import format from 'date-fns/format';
import {getIntInclusive} from "./random";

export class Horloge {
    constructor(container) {
        this._container = container;
    }
    update() {
        const r = getIntInclusive(0, 255);
        const g = getIntInclusive(0, 255);
        const b = getIntInclusive(0, 255);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        this._container.innerText = format(new Date(), 'HH:mm:ss');
    }
    start() {
        this.update();
        setInterval(this.update.bind(this), 1000);
    }
}
