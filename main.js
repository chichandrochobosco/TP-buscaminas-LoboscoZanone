//Constantes del juego
const COLUMNAS = 10;
const FILAS = 10;
const CANTIDAD_MINAS = 10;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

  // Modificar/completar
  ponerMinasTablero();
  casillerosSinDescubrir =COLUMNAS*FILAS;
}


function draw() {
  if (hizoClick == true)
  {
    if(mouseButton== LEFT ){
      if(tieneMinaCasillero(columnaPresionada, filaPresionada)){
        perder();
        
      }else{
        
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); //pinta el casillero clickeado. Modificar/completar 
        descubrirCasillero(columnaPresionada, filaPresionada);
      }
      
    }else if(mouseButton== RIGHT ){
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
    
  }
  if(ganoElJuego()==true){
    ganar();
  }

}


function ganoElJuego()
{
  if(casillerosSinDescubrir==CANTIDAD_MINAS){
    return true;
  }
  return false;   //Esto hace que NUNCA gane el juego. Modificar/completar
}
//punto 12
function ponerMinasTablero()
{
  matrizMinas=[10, 10];
  for(let i=0;i<10;i++){
  let columna = Math.floor(Math.random()*10);
  let fila = Math.floor(Math.random()*10);
  ponerMinaCasillero(columna , fila  );
  console.log(columna + " fila: " + fila);

  }
  //let j=0;
  //while(j<10){
  //  let columna = Math.floor(Math.random()*10);
  //   let fila = Math.floor(Math.random()*10);
  //   if(){
  // 
  //   }
  //   ponerMinaCasillero(columna , fila  );
  //   console.log(columna + " fila: " + fila);
  //  j++;
  // }

}

function mostrarMinas()
{
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      if(tieneMinaCasillero(i, j)){
        pintarCasillero(i, j, COLOR_CASILLERO_CON_MINA);
      }
    }
  }
  
}

function contarMinasAlrededor(columnaPresionada, filaPresionada)
{
  let k=0;
  
  if(tieneMinaCasillero((columnaPresionada+1), (filaPresionada))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada-1), (filaPresionada))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada-1), (filaPresionada-1))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada), (filaPresionada-1))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada+1), (filaPresionada-1))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada-1), (filaPresionada+1))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada), (filaPresionada+1))){
    k++;
  }
  if(tieneMinaCasillero((columnaPresionada+1), (filaPresionada+1))){
    k++;
  }

  return k;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}
function numrandom(){

}
