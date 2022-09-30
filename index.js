const valores = [{
    valor : 11,
    nombre : "as"
},{
    valor : 2,
    nombre : "2"
},{
    valor : 3,
    nombre : "3"
},{
    valor : 4,
    nombre : "4"
},{
    valor : 5,
    nombre : "5"
},{
    valor : 6,
    nombre : "6"
},{
    valor : 7,
    nombre : "7"
},{
    valor : 8,
    nombre : "8"
},{
    valor : 9,
    nombre : "9"
},{
    valor : 10,
    nombre : "10"
},{
    valor : 10,
    nombre : "j"
},{
    valor : 10,
    nombre : "q"
},{
    valor : 10,
    nombre : "k"
}
];
const palos = ["picas", "corazones", "treboles", "diamantes"]

/* const puntajesGenerales = JSON.parse(localStorage.getItem("nombres Ingresados"))||[]; */
/* const valorPuntajesGenerales = JSON.parse(localStorage.getItem("puntuaciones"))||[]; */

let boton = 0;
let primeraCarta = 0;
let segundaCarta = 0;
let valorCarta = 0;
let paloCarta = 0;
let nombreCarta = 0;
let primeraCartaMano = 0 ;
let segundaCartaMano = 0 ;
let primeraCartaManoDealer = 0;
let segundaCartaManoDealer = 0;
let cartaNueva = 0;
let ultimaCarta = 0;
let ultimaRondaCarta = 0;
let cartasMano = 0;
let botonCartaNueva = 0;
let resultadoCartasMano = 0;
let pedirCartaNuevaDealer = 0;
let botonCartaNuevaDealer = 0;
let cartasManoDealer = 0;
let resultadoCartasDealer = 0;
let nuevasCartasDealer = 0;
let nuevasCartasMano = 0;
let botonCartas = 0;
let botonCartasDealer = 0;
let primeraCartaManoDealerHTML = 0;
let segundaCartaManoDealerHTML = 0;
let pedirCartaNuevaDealerHTML = 0;
let usuarioPerdedor = 0;
let usuarioGanador = 0;
let pedirUnaUltimaCarta = 0;
let botonUltimaCartaMano = 0;
let botonUltimaCartaDealer = 0;
let cartaFinalDealer = 0;
let cartaFinalDealerHTML = 0;
let botonPlantarse = 0;
let cartasFinales = 0;
let cartasFinalesDealer = 0;
let botonPlantarseDealer = 0;
let resultadoFinal = 0;


const suma = (a,b) => a + b; 
const sumaMultiple = (a,b,c) => a+b+c;
const resta = (a,b) => a - b;

function puntaje(){
    let puntuacion = document.getElementById("ingresar-puntaje")
    puntuacion.innerHTML= `<div id="boton-ingresar">
        <input type="text" id="nombre">
        <button onclick="ingresarPuntuacion()"> ingrese su nombre </button>
        </div>
        <div id="nombre-correcto-ingresado"></div>
        `  
}
function verPuntaje(){
    let verPuntuacion = document.getElementById("ver-puntaje")
    verPuntuacion.innerHTML= `<div id="boton-ver-puntaje">
        <input type="text" id="nombre-puntaje" placeholder="ingrese su nombre">
        <button onclick="loginNombre()"> ver su puntaje </button>
        </div>
        `  
}


 function ingresarPuntuacion(){
    let usuariosRegistrados = localStorage.nombresIngresados ? JSON.parse(localStorage.nombresIngresados) : [];
    const puntajesGenerales = {
    nombre : document.getElementById("nombre").value,
    };

    usuariosRegistrados.push(puntajesGenerales);
    localStorage.setItem("nombresIngresados", JSON.stringify(usuariosRegistrados));

    let nombreCorrectoIngresado = document.getElementById("nombre-correcto-ingresado")
    nombreCorrectoIngresado.innerHTML = `puntaje ingresado!`
    let botonIngresar = document.getElementById("boton-ingresar")
    botonIngresar.style.display = `none`
    verPuntaje()

}
function loginNombre(){
    const nombreIngresado = document.getElementById("nombre").value
    if (localStorage.getItem("nombresIngresados")){
        const requisitosNombres = JSON.parse(localStorage.getItem("nombresIngresados"));
        const usuarioBienIngresado = requisitosNombres.filter(user=>{
            return nombreIngresado === user.nombre

        })            
        if (usuarioBienIngresado.length){
            
            let verPuntuacion = document.getElementById("ver-puntaje")
            verPuntuacion.innerHTML= `<div>
            <p> Su puntuacion es de ${usuarioBienIngresado.length} </p>
            </div>

        `  
           if (usuarioBienIngresado.length == 1){
            let nombreCorrectoIngresado = document.getElementById("nombre-correcto-ingresado")
            nombreCorrectoIngresado.innerHTML = `jugador no ingresado!`
            let verPuntuacion = document.getElementById("ver-puntaje")
            verPuntuacion.innerHTML= `<div>
            <p> Su puntuacion es de ${usuarioBienIngresado.length-1} </p>
            </div>`
            let botonIngresar = document.getElementById("boton-ingresar")
            botonIngresar.innerHTML= ``
        } 
        } 
    }

}


function cartaManoDealer() {
    carta = valores[Math.floor(Math.random() * valores.length)];
    nombreCarta = Object.values(carta)[1];
    paloCarta = (Math.floor(Math.random() * (palos.length)));
    valorCarta = Object.values(carta)[0];
    return (valorCarta);
}
function cartaMano() {
    carta = valores[Math.floor(Math.random() * valores.length)];
    nombreCarta = Object.values(carta)[1];
    paloCarta = (Math.floor(Math.random() * (palos.length)));
    valorCarta = Object.values(carta)[0];
    return (valorCarta);
}

function plantarse(){
    botonCartaNueva.innerHTML = ""
    botonUltimaCartaMano.innerHTML=""
    botonPlantarse.innerHTML=""

}

    

function ultimaSuma(){
    if((cartasMano!=0&&cartasManoDealer!=0)&&(nuevasCartasMano==0&&nuevasCartasDealer==0&&cartasFinales==0&&cartasFinalesDealer==0)){
        resultadoFinal = resta(cartasMano,cartasManoDealer)
        if(resultadoFinal<=0){
            usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
        }else if(resultadoFinal>0){
            usuarioGanador = document.getElementById("ganador");
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador" 
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()
        }
    }
        if((cartasManoDealer!=0&&nuevasCartasMano!=0&&cartasMano!=0)&&(nuevasCartasDealer==0&&cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(nuevasCartasMano,cartasManoDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador" 
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
             usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""}
        }
        if ((cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasMano!=0)&&(cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(nuevasCartasMano,nuevasCartasDealer)
            if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }else if (resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasFinales!=0)&&(cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasFinales,nuevasCartasDealer)
            if(resultadoFinal>0){
            usuarioGanador = document.getElementById("ganador");
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador" 
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()}
        else if(resultadoFinal<=0){
            usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
        }
    }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasFinales!=0&&cartasFinalesDealer!=0)){
            resultadoFinal = resta(cartasFinales,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            } else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&cartasFinales!=0)&&(nuevasCartasDealer==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasFinales,cartasManoDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            } else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0)&&(nuevasCartasMano==0&&cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasMano,nuevasCartasDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0&&cartasFinalesDealer!=0)&&(nuevasCartasMano==0&&cartasFinales==0)){
            resultadoFinal = resta(cartasMano,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }
        }
        if((cartasMano!=0&&nuevasCartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0&&cartasFinalesDealer!=0)&&(cartasFinales==0)){
            resultadoFinal = resta(nuevasCartasMano,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
            }
        }
    
    }

function PlantarseDealer(){
    
    botonCartaNueva.innerHTML = ""
    botonUltimaCartaMano.innerHTML=""
    botonPlantarse.innerHTML=""
    botonPlantarseDealer.innerHTML=""
    botonCartaNuevaDealer.innerHTML=""
    botonUltimaCartaDealer.innerHTML=""
    ultimaSuma()

}


let iniciarSimulador = document.getElementById("boton-iniciar");
iniciarSimulador.addEventListener("click", simulador);


function pedirCarta(){
    primeraCartaMano = cartaMano()
    
    primeraCarta = document.getElementById("imagenes-primera-carta-mano")
    primeraCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
    <p> Su primera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
    `
    }
    function pedirSegundaCarta(){
        
        segundaCartaMano = cartaMano()
        segundaCarta = document.getElementById("imagenes-segunda-carta-mano")
        segundaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> Su segunda carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        cartasMano = suma(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano));
        resultadoCartasMano = document.getElementById("resultado-suma-mano")
        resultadoCartasMano.innerHTML=`sus cartas suman ${cartasMano}`;
        
        if (cartasMano===21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
            puntaje()
          }else if(cartasMano>21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
          }
           else {
           
          botonCartas.innerHTML = ""
        botonCartasDealer = document.getElementById("boton-pedir-dealer");
        botonCartasDealer.innerHTML = `<button>pedir cartas dealer</button>`
        botonCartasDealer.addEventListener("click", pedirCartaDealer)
        botonCartasDealer.addEventListener("click", pedirSegundaCartaDealer)
    }
     }     
     function pedirCartaDealer() {
        primeraCartaManoDealer= cartaManoDealer()

            primeraCartaManoDealerHTML = document.getElementById("imagenes-primera-carta-dealer")
            primeraCartaManoDealerHTML.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> La primera carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `}
        function pedirSegundaCartaDealer(){
            segundaCartaManoDealer = cartaManoDealer()
            segundaCartaManoDealerHTML = document.getElementById("imagenes-segunda-carta-dealer")
            segundaCartaManoDealerHTML.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> La segunda carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        cartasManoDealer = suma(parseFloat(primeraCartaManoDealer), parseFloat(segundaCartaManoDealer));
        resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`las cartas del dealer sumar ${cartasManoDealer}`  
        botonCartasDealer.innerHTML= ""
        if(cartasManoDealer===21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
        } else if (cartasManoDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
        }
        else{
            
            botonCartaNueva = document.getElementById("boton-pedir-nueva")
            botonCartaNueva.innerHTML = `<button>pedir carta nueva</button>`;
            botonCartaNueva.addEventListener("click", pedirCartaNueva)
            botonPlantarse = document.getElementById("boton-plantarse")
            botonPlantarse.innerHTML = `<button> plantarse </button>`
            botonPlantarse.addEventListener("click", plantarse)
            botonPlantarseDealer = document.getElementById("boton-plantarse-dealer")
            botonPlantarseDealer.innerHTML = `<button> el dealer se planta (termina el juego)</button>`
            /* botonPlantarseDealer.addEventListener("click", PlantarseDealer) */
            botonPlantarseDealer.addEventListener("click", () =>{
                Swal.fire({
                    background : "#10A2B0" ,
                    title: '¿El dealer se planta?',
                    footer : `(Esto finaliza el juego)`,
                    showDenyButton: true,
                    confirmButtonText: 'El dealer se plantó',
                    denyButtonText: `Seguir jugando`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        PlantarseDealer()
                    } else if (result.isDenied) {
                      Swal.fire('Seguimos jugando!', '', 'success')
                    }
                  })
            }
            )
            botonCartaNuevaDealer = document.getElementById("boton-pedir-carta-nueva-dealer");
            botonCartaNuevaDealer.innerHTML = `<button>pedir carta nueva dealer</button>`
            botonCartaNuevaDealer.addEventListener("click", cartaDealerRondaDos)

        }

    }
    function pedirCartaNueva (){
        cartaNueva = cartaMano()
        
        let pedirCartaNueva = document.getElementById("imagenes-nueva-carta-mano")
        pedirCartaNueva.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> Su tercera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        botonCartaNueva.innerHTML = ""
    nuevasCartasMano = sumaMultiple(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano), parseFloat(cartaNueva));
    resultadoCartasMano = document.getElementById("resultado-suma-mano")
    resultadoCartasMano.innerHTML=`sus cartas ahora suman ${nuevasCartasMano}`;
        if(nuevasCartasMano>21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
         
    }else if(nuevasCartasMano==21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            puntaje()
    }
    else {
        botonPlantarse = document.getElementById("boton-plantarse")
        botonPlantarse.innerHTML = `<button> plantarse </button>`
        botonPlantarse.addEventListener("click", plantarse)
        botonUltimaCartaMano = document.getElementById("boton-pedir-ultima");
        botonUltimaCartaMano.innerHTML = `<button>pedir ultima carta</button>`;
        botonUltimaCartaMano.addEventListener("click", pedirUltimaCarta);
    }
    }
    function cartaDealerRondaDos (){
        pedirCartaNuevaDealer = cartaManoDealer()
        pedirCartaNuevaDealerHTML = document.getElementById("imagenes-nueva-carta-dealer")
        pedirCartaNuevaDealerHTML.innerHTML = `<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> La tercera carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        nuevasCartasDealer = suma(parseFloat(cartasManoDealer), parseFloat(pedirCartaNuevaDealer));
    resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`las nuevas cartas del dealer suman ${nuevasCartasDealer}`  
        botonCartaNuevaDealer.innerHTML= "";
        if(nuevasCartasDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            puntaje()
        }
        else if(nuevasCartasDealer===21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
        }
        else{
            botonUltimaCartaDealer = document.getElementById("boton-pedir-ultima-carta-dealer");
            botonUltimaCartaDealer.innerHTML = `<button>pedir ultima carta dealer</button>`
            botonUltimaCartaDealer.addEventListener("click", ultimaCartaDealer)
            botonPlantarseDealer = document.getElementById("boton-plantarse-dealer")
            botonPlantarseDealer.innerHTML=`<button> el dealer se planta (termina el juego) </button>`
            botonPlantarseDealer.addEventListener("click", () =>{
                Swal.fire({
                    background : "#10A2B0" ,
                    title: '¿El dealer se planta?',
                    footer : `(Esto finaliza el juego)`,
                    showDenyButton: true,
                    confirmButtonText: 'El dealer se plantó',
                    denyButtonText: `Seguir jugando`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        PlantarseDealer()
                    } else if (result.isDenied) {
                      Swal.fire('Seguimos jugando!', '', 'success')
                    }
                  })
            }
            )
    }
    }
    function pedirUltimaCarta(){
        pedirUnaUltimaCarta = cartaMano()
    ultimaCarta = document.getElementById("imagenes-ultima-carta-mano")
    ultimaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
    <p> Su ultima carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
    `

    botonUltimaCartaMano.innerHTML=""
    cartasFinales = suma(parseFloat(nuevasCartasMano),(pedirUnaUltimaCarta));
    resultadoCartasMano = document.getElementById("resultado-suma-mano")
    resultadoCartasMano.innerHTML=`la suma final de sus cartas ahora es ${cartasFinales}`;
    if(cartasFinales>21){
        usuarioPerdedor = document.getElementById("perdedor")
        usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
        usuarioPerdedor.className = "perdedor"
        botonCartaNuevaDealer.innerHTML = ``
        botonUltimaCartaDealer.innerHTML = ``
        botonCartasDealer.innerHTML = ``
        botonPlantarse.innerHTML = ""
        botonPlantarseDealer.innerHTML=""
    }else if(cartasFinales<=21){
        ultimaSuma()
    }
    else{
        botonUltimaCartaDealer = document.getElementById("boton-pedir-ultima-carta-dealer");
        botonUltimaCartaDealer.innerHTML = `<button>pedir ultima carta dealer</button>`
        botonUltimaCartaDealer.addEventListener("click", ultimaCartaDealer)
    }
    }
    function ultimaCartaDealer(){
        cartaFinalDealer = cartaManoDealer()
        cartaFinalDealerHTML = document.getElementById("imagenes-ultima-carta-dealer")
        cartaFinalDealerHTML.innerHTML = `<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> La ultima carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `

        botonUltimaCartaDealer.innerHTML=""
        cartasFinalesDealer = suma(parseFloat(nuevasCartasDealer), (cartaFinalDealer))
        resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`las cartas finales del dealer suman ${cartasFinalesDealer}`
        if(cartasFinalesDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()
        }else if(cartasFinalesDealer==21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
        }else{
            ultimaSuma()
        }

    }
function simulador(){
    iniciarSimulador.innerHTML=""
    iniciarSimulador.removeEventListener("click",simulador)
    iniciarSimulador.style.marginTop = null;
    iniciarSimulador.style.border = null;
    iniciarSimulador.style.borderRadius = null;
    boton = document.getElementById("boton")
    boton.style.display = "none"
    botonCartas = document.getElementById("boton-pedir");
    botonCartas.innerHTML = `<button>pedir cartas</button>`;
    botonCartas.addEventListener("click", pedirCarta)
    botonCartas.addEventListener("click", pedirSegundaCarta)
/*     if(nuevasCartasMano<20){
        function pedirUltimaCarta(){
            pedirUnaUltimaCarta = cartaMano()
        ultimaCarta = document.getElementById("imagenes-ultima-carta-mano")
        ultimaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> Su primera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
    }
} */
    /* botonUltimaCartaMano = getElementById("boton-pedir-ultima");
    botonUltimaCartaMano.innerHTML = `<button>pedir ultima carta</button>`;
    botonUltimaCartaMano.addEventListener("click", pedirUltimaCarta); */
    /* function pedirUltimaCarta(){
    pedirUnaUltimaCarta = cartaMano()
    ultimaCarta = document.getElementById("imagenes-ultima-carta-mano")
    ultimaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
    <p> Su primera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
    `
} */
/*     if(nuevasCartasMano<40){
        botonUltimaCartaMano = getElementById("boton-pedir-ultima");
        botonUltimaCartaMano.innerHTML = `<button>pedir ultima carta</button>`;
        botonUltimaCartaMano.addEventListener("click", pedirUltimaCarta);
        function pedirUltimaCarta(){
        pedirUnaUltimaCarta = cartaMano()
        ultimaCarta = document.getElementById("imagenes-ultima-carta-mano")
        ultimaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p> Su primera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
    }
    }  */
  
/* 
function pedirUltimaCarta(){
    if (nuevasCartasMano<20){
    let pedirUnaUltimaCarta = parseInt(prompt("Ingrese 1 si quiere pedir otra carta. Ingrese 0 si se plantó."));
    if (pedirUnaUltimaCarta===1) {
        ultimaCarta = cartaMano(valorCarta, palos[paloCarta]);
        alert (`La nueva carta pedida es un ${ultimaCarta}`);
    } else if (pedirUnaUltimaCarta===0){
        alert (`Usted no pidió.`);
    } else {
        alert (`Ingrese una opción válida`)
        pedirUltimaCarta();
    }
}
}
pedirUltimaCarta();

let cartasFinales = suma(parseFloat(ultimaCarta), parseFloat(nuevasCartasMano));
    alert("Todas sus cartas ahora suman "+ cartasFinales);

 function ultimaRonda (){
    if (cartasFinales<20){
    let pedirUltimaRonda = parseInt(prompt("Ingrese 1 si quiere pedir una última carta. Ingrese 0 si se planto."));
if (pedirUltimaRonda===1) {
    ultimaRondaCarta = cartaMano(valorCarta, palos[paloCarta]);
    alert (`la carta final es un ${ultimaRondaCarta}`);
} else if (pedirUltimaRonda===0){
    alert (`Usted no pidió.`);
} else {
    alert (`Ingrese una opción válida`)
    ultimaRonda();
        }
    }
}
ultimaRonda()

let ultimasCartas = suma(parseFloat(cartasFinales), parseFloat(ultimaRondaCarta));
alert("sus cartas finales suman "+ ultimasCartas);

if ((ultimasCartas>nuevasCartasDealer)&&(ultimasCartas<=21)||((nuevasCartasDealer>21))&&(ultimasCartas<=21)){
    alert (`Sus cartas suman ${ultimasCartas} y las cartas del dealer suman ${nuevasCartasDealer}`)
    alert("Usted ha ganado")
} else if ((ultimasCartas<nuevasCartasDealer)&&(nuevasCartasDealer<=21)||(ultimasCartas>21)){
    alert (`Sus cartas suman ${ultimasCartas} y las del dealer suman ${nuevasCartasDealer}`)
    alert("Usted ha perdido")
} else {
    alert (`Sus Cartas y las del dealer suman lo mismo, el dealer ha ganado.`)
}
let usuarioGanador = document.getElementById("ganador");
let usuarioPerdedor = document.getElementById("perdedor");

if ((ultimasCartas>nuevasCartasDealer)&&(ultimasCartas<=21)||((nuevasCartasDealer>21))&&(ultimasCartas<=21)){
    usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
     usuarioGanador.className = "ganador" 
}else if ((ultimasCartas<nuevasCartasDealer)&&(nuevasCartasDealer<=21)||(ultimasCartas>21)){
    usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
    usuarioPerdedor.className = "perdedor" 
*/
} 
/* usuarioGanador = document.getElementById("ganador");
usuarioPerdedor = document.getElementById("perdedor");
if (nuevasCartasMano<20){
    usuarioGanador.innerHTML = "<h2>usted ha ganado</h2>";
    usuarioGanador.className = "ganador" 
}else{
    usuarioPerdedor.innerHTML = "<h2>usted ha perdido</h2>"
    usuarioPerdedor.className = "perdedor" 
} */
