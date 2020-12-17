function _load() {

  //1es szabaly: mindig tervezd meg a lepeseket!

  //2es szabaly: figyelj a cleancode szabalyokra(tagolas,kommenteles)!

  //3as szabaly: fontos ne kapkodj - irasjelek, kis es nagybetuk, zarojelek pontos hasznalata!

  /* html
    1. hivatkozasok megadasa (css-link,js-script,font style-link+url)
    2. tabolas 
      <div class=attention>
        <h1>Minden elem fontos</h1>
      </div>

      <div class=attention>
        <h2>Minden elem fontos</h2>
      </div>

    3. minden tervezett elem letrehozasa es utana lepjunk tovabb a kulcsinyre-css es a cselekvesekre-js. Azaz teljes elorelathato struktura elkeszitese.
  

  scss/css
    1. mindig kezd azzal 
    *,
    *::before,
    *::after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
      
    2. tagolas, mert akkor kesobb is tudod melyik elemhez milyen tulajdonsag tartozik

    3. kivulrol befele haladva (a szerkezetben) add meg az elemek tulajdonsagait      
  
  
  js
    1. Mindig azzal kezdj
      function _load() {
        //console.log(mukodik);
      }
        
      window.addEventListener("load", _load);
        
    2. figyelj arra, ha nem mukodik az automatikus kiegeszites, akkor elirtad vagy kommentelsz
      
    3. console.log(); hasznalata a lekerendo atalakitas utan egybol
  */
  let rootE = document.getElementById("root");

  let notes = [];

  notes.push({
    tag: "div",
    content: `
     Mindig ugy kezdjuk a scriptunket, hogy letrehozzuk a load esemeny hatasara meghivando fuggvenyt. Majd a load esemeny hatasara meghivjuk.
    `
  });
  notes.push({
    tag: "code",
    content: `
    function _load() {
      //console.log(mukodik);
    }
      
    window.addEventListener("load", _load);
    `
  });
  //console.log(notes);
  for (note of notes) {

    root.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
};

}

window.addEventListener("load", _load);