import { KEPEK } from "../model/adat.js";
import { View } from "../view/View.js";
import { Controller } from "./controller/Controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const view = new View();
    const controller = new Controller(KEPEK, view);
});
