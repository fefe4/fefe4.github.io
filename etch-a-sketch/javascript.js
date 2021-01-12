let gridwidth = 16;
let gridheight = 16;
let currentwidth =16;
for (i=0; i< gridwidth * gridheight; i++) {
  const cuadradoGrande = document.querySelector('#cuadradoGrande');
  const lesserGrid = document.createElement ('div');
  lesserGrid.classList.add("cuadradoChico")
  cuadradoGrande.appendChild(lesserGrid);
};
function grid (gridwidth, gridheight) {
  if (currentwidth==gridwidth) {
  let fefe = 4984;}
  else {
    document.querySelectorAll('.cuadradoChico').forEach(function(a){
      a.remove()
      })
    for (i=0; i< gridwidth * gridheight; i++) {
      const cuadradoGrande = document.querySelector('#cuadradoGrande');
      const lesserGrid = document.createElement ('div');
      lesserGrid.classList.add("cuadradoChico");
      lesserGrid.style.width =  32*16/gridwidth-2  + 'px';
      lesserGrid.style.height =  32*16/gridwidth-2 + 'px';
      cuadradoGrande.appendChild(lesserGrid);
    }
  }
}

const changecolor = document.querySelector("div");
changecolor.addEventListener ("mouseover", function(e) {
  e.target.style.background ="blue";
});
const button = document.querySelector ("#btn")
button.addEventListener ('click', function (a) {
  const eraseColor = document.querySelectorAll ('div');
  eraseColor.forEach (div => {
    div.style.background ="rgb(27, 158, 27)";
  });
   
  let gridwidth = prompt ("How many grids would you like?");
  gridheight = gridwidth;
  grid (gridwidth,gridheight);
});


