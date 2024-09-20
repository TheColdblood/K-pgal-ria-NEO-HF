export function htmlOsszeAllit(lista) {
     let txt = "";
     for (let index = 0; index < lista.length; index++) {
          txt += `
          
          <div class="kep">
          <h3>${lista[index].cim}</h3>
          <img src=${lista[index].kep} alt=${lista[index].cim}>
          <p>${lista[index].leiras}</p>
          </div>
          `
     }
     console.log(txt);
     return txt;
  }