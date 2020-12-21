function _load() {

  let rootE = document.getElementById("root");

  let noteRegularFirst = [];
  let noteRegularSecond = [];
  let noteRegularThird = [];

  noteRegularFirst.push({
    tag: "div",
    content: `
    Regular 1. Mindig tervezd meg a feladat lepeseit!
    `
  });
  console.log(noteRegularFirst);

  for (note of noteRegularFirst) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Regular first main rule

  noteRegularSecond.push({
    tag: "div",
    content: `
    Regular 2. Figyelj a cleancode szabalyokra(tagolas,kommenteles)!
    `
  });
  console.log(noteRegularSecond);

  for (note of noteRegularSecond) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Regular second main rule
  
  noteRegularThird.push({
    tag: "div",
    content: `
    Regular 3. Ne kapkodj - irasjelek, kis es nagybetuk, zarojelek pontos hasznalata! 
    `
  });
  console.log(noteRegularThird);

  for (note of noteRegularThird) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Regular third main rule

  //------------------------------------------
  
  let noteHTMLFirst = [];
  let noteHTMLSecond = [];
  let noteHTMLThird = [];
  
  noteHTMLFirst.push({
    tag: "div",
    content: `
    HTML 1. Hivatkozasok megadasa a head-ben (css-link,js-script,font style-link+url)
    `
  });
  
  noteHTMLFirst.push({
    tag: "code",
    content: `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js"></script>
    <link rel="stylesheet" href="./style.css">
    <link href="url" rel="stylesheet">
    </head>
    `
  });
  console.log(noteHTMLFirst);
  
  for (note of noteHTMLFirst) {
    
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the HTML first main rule.
  
  noteHTMLSecond.push({
    tag: "div",
    content: `
    HTML 2. Tabolas, Tabolas, Tabolas!!! Az atlathatosag kedveert
    `
  });

  noteHTMLSecond.push({
    tag: "code",
    content: `
    <div class=attention>
    <h1>div-h1-div</h1>
    </div>
    
    <div class=attention>
    <h2>div-h2-div</h2>
    </div>
    `
  });
  console.log(noteHTMLSecond);
  
  for (note of noteHTMLSecond) {
    
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the HTML second main rule.
  
  noteHTMLThird.push({
    tag: "div",
    content: `
    HTML 3. A teljes elorelathato struktura elkeszitese, majd csak ezutan lepjunk tovabb a css-re es a JS-re.
    `
  });
  console.log(noteHTMLThird);
  
  for (note of noteHTMLThird) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the HTML third main rule.

  //------------------------------------------
  
  let noteCssFrist = [];
  let noteCssSecond = [];
  let noteCssThird = [];
  
  noteCssFrist.push({
    tag: "div",
    content: `
    Scss/Css 1. Minden Scss/css-t file-t kezdj ezzel.
    `
  });

  noteCssFrist.push({
    tag: "code",
    content: `
    *, <br>
    *::before, <br>
    *::after{ <br>
      padding: 0; <br>
      margin: 0; <br>
      box-sizing: border-box; <br>
    }
    `
  });
  console.log(noteCssFrist);
  
  for (note of noteCssFrist) {
    
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Scss/Css first main rule.

  noteCssSecond.push({
    tag: "div",
    content: `
    Scss/Css 2. Tagolas, tagolas, tagolas!!! Nagyon fontos az atlathatosag kedveert. Igy mindig tudod majd, hogy hogyan epul fel a struktura es mihez mi tartozik.
    `
  });
  console.log(noteCssSecond);
  
  for (note of noteCssSecond) {
    
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Scss/Css second main rule.
  
  noteCssThird.push({
    tag: "div",
    content: `
    Scss/Css 3. Kivulrol befele haladva add meg a tulajdonsagait az elemeknek, azaz szulo --> gyerek sorrend   
    `
  });
  console.log(noteCssThird);
  
  for (note of noteCssThird) {
    
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Scss/Css first main rule.
  
  //------------------------------------------
  
  let noteJsFirst = [];
  let noteJsSecond = [];
  let noteJsThird = [];
  
  noteJsFirst.push({
    tag: "div",
    content: `
     JS 1. Mindig ugy kezdjuk a scriptunket, hogy letrehozzuk a load esemeny hatasara meghivando fuggvenyt. Majd a load esemeny hatasara meghivjuk.
    `
  });

  noteJsFirst.push({
    tag: "code",
    content: `
    function _load() { <br>
      //console.log(mukodik); <br>
    } <br>
    window.addEventListener("load", _load);
    `
  });
  console.log(noteJsFirst);

  for (note of noteJsFirst) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Js first main rule.

  noteJsSecond.push({
    tag: "div",
    content: `
     JS 2. Ha nem mukodik az automatikus kiegeszites, akkor vagy kommentelsz, vagy elirtal valamit, azonnal ellenorizz.
    `
  });
  console.log(noteJsSecond);

  for (note of noteJsSecond) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Js second main rule.

  noteJsThird.push({
  tag: "div",
  content: `
   JS 3. A console.log hasznalata a keresett atalakitas utan azonnal.
  `
  });

  noteJsThird.push({
    tag: "code",
    content: `
    console.log(a vart eredmeny elore meghatarozott valtozoja, peldaul noteJsThird);
    `
  });
  console.log(noteJsThird);

  for (note of noteJsThird) {

    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);
  };
  // This is the Js third main rule.

}

window.addEventListener("load", _load);