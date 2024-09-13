import { KEPEK } from "./adat.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

class Jatekter {
    constructor(galeriaElem) {
        this.galeriaElem = galeriaElem;
        this.curKep = 0;
        this.kepOldalankent = 4;
        this.render();
        this.addPaginationEvents();
    }

    render() {
        const start = this.curKep * this.kepOldalankent;
        const end = start + this.kepOldalankent;
        const currentImages = KEPEK.slice(start, end);

        this.galeriaElem.innerHTML = htmlOsszeAllit(currentImages);
        this.kattintasEsemeny();
    }

    kattintasEsemeny() {
        const kiskepElemei = document.querySelectorAll(".kep img");
        kiskepElemei.forEach((imgElem, index) => {
            imgElem.addEventListener("click", (event) => {
                const realIndex = this.curKep * this.kepOldalankent + index;
                this.kepValtas(event.target.src);
                nagykep.aktualisIndex = realIndex;
            });
        });
    }

    kepValtas(src) {
        nagykep.valtas(src);
    }

    addPaginationEvents() {
        const prevButton = document.querySelector(".galeria-vissza");
        const nextButton = document.querySelector(".galeria-elore");

        prevButton.addEventListener("click", () => this.elozo());
        nextButton.addEventListener("click", () => this.kovetkezo());
    }

    elozo() {
        if (this.curKep > 0) {
            this.curKep--;
            this.render();
        }
    }

    kovetkezo() {
        if ((this.curKep + 1) * this.kepOldalankent < KEPEK.length) {
            this.curKep++;
            this.render();
        }
    }
}

class Kartya {
    constructor(nagykepElem, balGomb, jobbGomb) {
        this.nagykepElem = nagykepElem;
        this.balGomb = balGomb;
        this.jobbGomb = jobbGomb;
        this.aktualisIndex = 0;
        this.navEsemeny();
    }

    valtas(src) {
        this.nagykepElem.src = src;
    }

    navEsemeny() {
        this.balGomb.addEventListener("click", () => this.vissza());
        this.jobbGomb.addEventListener("click", () => this.elore());
    }

    vissza() {
        this.aktualisIndex--;
        if (this.aktualisIndex < 0) {
            this.aktualisIndex = KEPEK.length - 1;
        }
        this.nagykepElem.src = KEPEK[this.aktualisIndex].kep;
    }

    elore() {
        this.aktualisIndex++;
        if (this.aktualisIndex >= KEPEK.length) {
            this.aktualisIndex = 0;
        }
        this.nagykepElem.src = KEPEK[this.aktualisIndex].kep;
    }
}

const galeriaElem = document.querySelector(".galeria");
const nagykepElem = document.querySelector(".nagykep img");
const balGomb = document.querySelector(".bal");
const jobbGomb = document.querySelector(".jobb");

const galeria = new Jatekter(galeriaElem);
const nagykep = new Kartya(nagykepElem, balGomb, jobbGomb);
