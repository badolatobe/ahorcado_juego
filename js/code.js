let intentos = 5;
const palabras=["apoteosis", "retornable", "indulgente", "javascript", "sol", "cuasar"];
const palabra=iniciar();
let letrasAdivinadas = new Array(palabra.length).fill('_ ');
const parintent =document.getElementById("parrafo-intentos");
parintent.textContent="intentos restantes: "+intentos;





function iniciar(){
    const indice=
Math.floor(Math.random()*palabras.length);
return palabras[indice];
}

//----------

const parrafo = document.getElementById("ppm");
parrafo.textContent = "La palabra es: "+palabra.replace(/./g,"_ ");

function verificarLetra() {
    const letra = document.getElementById("letra").value;
    let acertado = false;
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letra) {
            letrasAdivinadas[i] = letra.toUpperCase();
            acertado = true;
        }
    }
    
    if (!acertado) {
        intentos--;
        actualizarImagen(); // Actualizar la imagen en caso de error
    }
}

function actualizarImagen() {
    // Cambia la imagen de fondo en función de los intentos restantes
    const i = document.getElementById("img")
    switch (intentos) {
        case 5:
            console.log("5")
            i.src = "./img/i1-01.jpg"
            //imagen.style.backgroundImage = "D:\ISSRC\Programación Web 1\ahorcado\estilos\i1-01.jpg";
            break;
        case 4:
            console.log("4")
            i.src= "./img/i1-02.jpg"
            //imagen.style.backgroundImage = "url('imagen2.png')";
            break;
        case 3:
            console.log("3")
            i.src= "./img/i1-02.jpg"
            //imagen.style.backgroundImage = "url('imagen3.png')";
            break;
        case 2:
            console.log("2")
            i.src= "./img/i1-03.jpg"
            //imagen.style.backgroundImage = "url('imagen4.png')";
            break;
        case 1:
            console.log("1")
            i.src= "./img/i1-04.jpg"
            //imagen.style.backgroundImage = "url('imagen5.png')";
            break;
        default:
            i.src= "./img/i1-05.jpg"
            console.log("d")
            //imagen.style.backgroundImage = "url('imagen6.png')";
            break;
    }
}