var marcas = [30,40,45,35];
var soma = 0;
var soma2 = 0;

function setup() {
  createCanvas(400, 400);

  soma = marcas[0]+marcas[1]+marcas[2]+marcas[3];
        //30 + 40 + 45 + 35 = 150


      //de 0 até 4 - aumentando de 1 em 1
  for(i=0;i<marcas.length;i++){
    soma2 = soma2 + marcas[i];
  }

  //soma2=0;
  //1ª execução: i=0 - marcas[0] = 30
  //soma2 = soma2 + marcas[0]
  //soma2 = 0 + 30

  //2ª execução: i=1 - marcas[1] = 40
  //soma2 = soma2 + marcas[1]
  //soma2 = 30 + 40
  
  //3ª execução: i=2 - marcas[2] = 45
  //soma2 = soma2 + marcas[2]
  //soma2 = 70 + 45

  //4ª execução: i=3 - marcas[3] = 35
  //soma2 = soma2 + marcas[3]
  //soma2 = 115 + 35

  //soma2 = 150


  //5ª execução: i=4   X

  console.log(soma);
  console.log(soma2);
}

function draw() {
  background(150);
}