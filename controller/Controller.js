import { KEPEK } from '../model/adat.js';
import { View } from '../view/View.js';

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.curKep = 0;
        this.kepOldalankent = 4;

        this.init();
    }

    init() {
        this.renderGallery();
        this.view.bindThumbnailClick(this.onThumbnailClick.bind(this));
        this.view.bindNavEvents(this.onNavBack.bind(this), this.onNavForward.bind(this));
        this.view.bindPaginationEvents(this.onPagPrev.bind(this), this.onPagNext.bind(this));
    }

    renderGallery() {
        const start = this.curKep * this.kepOldalankent;
        const end = start + this.kepOldalankent;
        const currentImages = this.model.slice(start, end);
        this.view.renderKisKep(currentImages);
    }

    onThumbnailClick(src) {
        this.view.displayNagykep(src);
        this.view.nagykepElem.src = src;
    }

    onNavBack() {
        this.curKep--;
        if (this.curKep < 0) this.curKep = this.model.length - 1;
        this.view.displayNagykep(this.model[this.curKep].kep);
    }

    onNavForward() {
        this.curKep++;
        if (this.curKep >= this.model.length) this.curKep = 0;
        this.view.displayNagykep(this.model[this.curKep].kep);
    }

    onPagPrev() {
        if (this.curKep > 0) {
            this.curKep--;
            this.renderGallery();
        }
    }

    onPagNext() {
        if ((this.curKep + 1) * this.kepOldalankent < this.model.length) {
            this.curKep++;
            this.renderGallery();
        }
    }
}

const view = new View();
const controller = new Controller(KEPEK, view);
