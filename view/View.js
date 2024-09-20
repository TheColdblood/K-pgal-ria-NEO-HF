export class View {
    constructor() {
        this.galeriaElem = document.querySelector(".galeria");
        this.nagykepElem = document.querySelector(".nagykep img");
        this.balGomb = document.querySelector(".bal");
        this.jobbGomb = document.querySelector(".jobb");
        this.prevButton = document.querySelector(".galeria-vissza");
        this.nextButton = document.querySelector(".galeria-elore");
    }

    renderKisKep(lista) {
        let html = lista.map(kep => `
            <div class="kep">
                <h3>${kep.cim}</h3>
                <img src="${kep.kep}" alt="${kep.cim}">
                <p>${kep.leiras}</p>
            </div>
        `).join('');
        this.galeriaElem.innerHTML = html;
    }

    displayNagykep(src) {
        this.nagykepElem.src = src;
    }

    bindThumbnailClick(handler) {
        this.galeriaElem.addEventListener("click", (event) => {
            if (event.target.tagName === 'IMG') {
                handler(event.target.src);
            }
        });
    }

    bindNavEvents(prevHandler, nextHandler) {
        this.balGomb.addEventListener("click", prevHandler);
        this.jobbGomb.addEventListener("click", nextHandler);
    }

    bindPaginationEvents(prevHandler, nextHandler) {
        this.prevButton.addEventListener("click", prevHandler);
        this.nextButton.addEventListener("click", nextHandler);
    }
}
