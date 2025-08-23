//#region Constantes
const MAX_WORD_LENGTH = 13;    // Longitud máxima de palabra permitida
const PERC_SOLAPAMIENTO = 0.05; // Porcentaje de solapamiento entre imágenes
const PERC_PANTALLA_BASE_LETRAS = 0.70; // Porcentaje de la altura de la pantalla donde se colocan las letras
const PERC_PANTALLA_ALTURA_LETRAS = 0.55; // Porcentaje de la altura de la pantalla que ocupan las letras
const PERC_PANTALLA_ANCHO_LETRAS = 0.90; // Porcentaje de la anchura de la pantalla que ocupan las letras
const VOLUMEN_GENERAL = 0.7;
const VOLUMEN_MUSICA = 0.3;
const VOLUMEN_MOD_FONEMAS = 1.0;

//#endregion

//#region Variables y arrays

// Crear un array con las letras del abecedario en español
//var letras = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "Z", "X", "C", "V", "B", "N", "M"];
// Crear un array con las letras del abecedario en español en orden alfabético
var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Crear un array por cada letra con las palabras que quieres mostrar
var palabrasQ = ["queso"];
var palabrasW = ["waterpolo", "windsurf"];
var palabrasE = ["elefante", "erizo", "esquimal", "estrella"];
var palabrasR = ["rata", "rio", "rojo", "ropa", "rosa", "rueda"];
var palabrasT = ["taza", "tesoro", "toalla", "tomate", "toro", "tren"];
var palabrasY = ["yate", "yoyo"];
var palabrasU = ["uno", "uvas"];
var palabrasI = ["iglu", "iman", "indio", "invierno", "isla"];
var palabrasO = ["ojos", "ola", "oro", "oso", "oveja"];
var palabrasP = ["pala", "papa", "pato", "payaso", "peine", "pelota", "pera", "perro", "pez", "pie", "pila", "piña"];
var palabrasA = ["abanico", "abeja", "ala", "arroz", "avion", "azul"];
var palabrasS = ["saco", "saxo", "semaforo", "seta", "silla", "sol", "sopa"];
var palabrasD = ["dado", "dedo", "delfin", "diana", "dinero", "dos"];
var palabrasF = ["familia", "faro", "farola", "foca", "foto", "fuego"];
var palabrasG = ["gafas", "galleta", "gallina", "gato", "goma", "gorro", "gota", "guantes", "gusano"];
var palabrasH = ["hada", "helado", "hielo", "hoja", "hueso", "huevo"];
var palabrasJ = ["jamon", "jaula", "jirafa"];
var palabrasK = ["kilo", "kiwi"];
var palabrasL = ["lazo", "leche", "leon", "limon", "llave", "lluvia", "lobo", "loro", "luna", "lupa"];
var palabrasÑ = ["ñoquis", "ñu"];
var palabrasZ = ["zapato", "zorro", "zumo"];
var palabrasX = ["xilofono"];
var palabrasC = ["cama", "casa", "cerezas", "cesta", "chaqueta", "chicle", "chino", "chocolate", "chupete", "coche"];
var palabrasV = ["vaca", "vaso", "vela", "verano", "vino"];
var palabrasB = ["ballena", "barco", "bebe", "biberon", "boca", "botas", "bufanda", "burro"];
var palabrasN = ["nave", "negro", "nido", "nieve", "niña", "niño", "noria", "nota", "nube", "nueve"];
var palabrasM = ["mama", "mano", "manzana", "mesa", "mono", "moto"];

// Crear un array para cada letra con las imágenes correspondientes
var imagenesA = ["Letras/A1.png", "Letras/A2.png", "Letras/A3.png", "Letras/A4.png", "Letras/A5.png", "Letras/A6.png"];
var imagenesB = ["Letras/B1.png", "Letras/B2.png", "Letras/B3.png", "Letras/B4.png", "Letras/B5.png", "Letras/B6.png"];
var imagenesC = ["Letras/C1.png", "Letras/C2.png", "Letras/C3.png", "Letras/C4.png", "Letras/C5.png", "Letras/C6.png"];
var imagenesD = ["Letras/D1.png", "Letras/D2.png", "Letras/D3.png", "Letras/D4.png", "Letras/D5.png", "Letras/D6.png"];
var imagenesE = ["Letras/E1.png", "Letras/E2.png", "Letras/E3.png", "Letras/E4.png", "Letras/E5.png", "Letras/E6.png"];
var imagenesF = ["Letras/F1.png", "Letras/F2.png", "Letras/F3.png", "Letras/F4.png", "Letras/F5.png", "Letras/F6.png"];
var imagenesG = ["Letras/G1.png", "Letras/G2.png", "Letras/G3.png", "Letras/G4.png", "Letras/G5.png", "Letras/G6.png"];
var imagenesH = ["Letras/H1.png", "Letras/H2.png", "Letras/H3.png", "Letras/H4.png", "Letras/H5.png", "Letras/H6.png"];
var imagenesI = ["Letras/I1.png", "Letras/I2.png", "Letras/I3.png", "Letras/I4.png", "Letras/I5.png", "Letras/I6.png"];
var imagenesJ = ["Letras/J1.png", "Letras/J2.png", "Letras/J3.png", "Letras/J4.png", "Letras/J5.png", "Letras/J6.png"];
var imagenesK = ["Letras/K1.png", "Letras/K2.png", "Letras/K3.png", "Letras/K4.png", "Letras/K5.png", "Letras/K6.png"];
var imagenesL = ["Letras/L1.png", "Letras/L2.png", "Letras/L3.png", "Letras/L4.png", "Letras/L5.png", "Letras/L6.png"];
var imagenesM = ["Letras/M1.png", "Letras/M2.png", "Letras/M3.png", "Letras/M4.png", "Letras/M5.png", "Letras/M6.png"];
var imagenesN = ["Letras/N1.png", "Letras/N2.png", "Letras/N3.png", "Letras/N4.png", "Letras/N5.png", "Letras/N6.png"];
var imagenesÑ = ["Letras/Ñ1.png", "Letras/Ñ2.png", "Letras/Ñ3.png", "Letras/Ñ4.png", "Letras/Ñ5.png", "Letras/Ñ6.png"];
var imagenesO = ["Letras/O1.png", "Letras/O2.png", "Letras/O3.png", "Letras/O4.png", "Letras/O5.png", "Letras/O6.png"];
var imagenesP = ["Letras/P1.png", "Letras/P2.png", "Letras/P3.png", "Letras/P4.png", "Letras/P5.png", "Letras/P6.png"];
var imagenesQ = ["Letras/Q1.png", "Letras/Q3.png", "Letras/Q5.png", "Letras/Q7.png", "Letras/Q9.png", "Letras/Q12.png"];
var imagenesR = ["Letras/R1.png", "Letras/R2.png", "Letras/R3.png", "Letras/R4.png", "Letras/R5.png", "Letras/R6.png"];
var imagenesS = ["Letras/S1.png", "Letras/S2.png", "Letras/S3.png", "Letras/S4.png", "Letras/S5.png", "Letras/S6.png"];
var imagenesT = ["Letras/T1.png", "Letras/T2.png", "Letras/T3.png", "Letras/T4.png", "Letras/T5.png", "Letras/T6.png"];
var imagenesU = ["Letras/U1.png", "Letras/U2.png", "Letras/U3.png", "Letras/U4.png", "Letras/U5.png", "Letras/U6.png"];
var imagenesV = ["Letras/V1.png", "Letras/V2.png", "Letras/V3.png", "Letras/V4.png", "Letras/V5.png", "Letras/V6.png"];
var imagenesW = ["Letras/W1.png", "Letras/W2.png", "Letras/W3.png", "Letras/W4.png", "Letras/W5.png", "Letras/W6.png"];
var imagenesX = ["Letras/X1.png", "Letras/X2.png", "Letras/X3.png", "Letras/X4.png", "Letras/X5.png", "Letras/X6.png"];
var imagenesY = ["Letras/Y1.png", "Letras/Y2.png", "Letras/Y3.png", "Letras/Y4.png", "Letras/Y5.png", "Letras/Y6.png"];
var imagenesZ = ["Letras/Z1.png", "Letras/Z2.png", "Letras/Z3.png", "Letras/Z4.png", "Letras/Z5.png", "Letras/Z6.png"];

// Crear un array para cada letra con las imágenes con la mano dada
var imagenesConManoA = ["LetrasConMano/A1.png", "LetrasConMano/A2.png", "LetrasConMano/A3.png", "LetrasConMano/A4.png", "LetrasConMano/A5.png", "LetrasConMano/A6.png"];
var imagenesConManoB = ["LetrasConMano/B1.png", "LetrasConMano/B2.png", "LetrasConMano/B3.png", "LetrasConMano/B4.png", "LetrasConMano/B5.png", "LetrasConMano/B6.png"];
var imagenesConManoC = ["LetrasConMano/C1.png", "LetrasConMano/C2.png", "LetrasConMano/C3.png", "LetrasConMano/C4.png", "LetrasConMano/C5.png", "LetrasConMano/C6.png"];
var imagenesConManoD = ["LetrasConMano/D1.png", "LetrasConMano/D2.png", "LetrasConMano/D3.png", "LetrasConMano/D4.png", "LetrasConMano/D5.png", "LetrasConMano/D6.png"];
var imagenesConManoE = ["LetrasConMano/E1.png", "LetrasConMano/E2.png", "LetrasConMano/E3.png", "LetrasConMano/E4.png", "LetrasConMano/E5.png", "LetrasConMano/E6.png"];
var imagenesConManoF = ["LetrasConMano/F1.png", "LetrasConMano/F2.png", "LetrasConMano/F3.png", "LetrasConMano/F4.png", "LetrasConMano/F5.png", "LetrasConMano/F6.png"];
var imagenesConManoG = ["LetrasConMano/G1.png", "LetrasConMano/G2.png", "LetrasConMano/G3.png", "LetrasConMano/G4.png", "LetrasConMano/G5.png", "LetrasConMano/G6.png"];
var imagenesConManoH = ["LetrasConMano/H1.png", "LetrasConMano/H2.png", "LetrasConMano/H3.png", "LetrasConMano/H4.png", "LetrasConMano/H5.png", "LetrasConMano/H6.png"];
var imagenesConManoI = ["LetrasConMano/I1.png", "LetrasConMano/I2.png", "LetrasConMano/I3.png", "LetrasConMano/I4.png", "LetrasConMano/I5.png", "LetrasConMano/I6.png"];
var imagenesConManoJ = ["LetrasConMano/J1.png", "LetrasConMano/J2.png", "LetrasConMano/J3.png", "LetrasConMano/J4.png", "LetrasConMano/J5.png", "LetrasConMano/J6.png"];
var imagenesConManoK = ["LetrasConMano/K1.png", "LetrasConMano/K2.png", "LetrasConMano/K3.png", "LetrasConMano/K4.png", "LetrasConMano/K5.png", "LetrasConMano/K6.png"];
var imagenesConManoL = ["LetrasConMano/L1.png", "LetrasConMano/L2.png", "LetrasConMano/L3.png", "LetrasConMano/L4.png", "LetrasConMano/L5.png", "LetrasConMano/L6.png"];
var imagenesConManoM = ["LetrasConMano/M1.png", "LetrasConMano/M2.png", "LetrasConMano/M3.png", "LetrasConMano/M4.png", "LetrasConMano/M5.png", "LetrasConMano/M6.png"];
var imagenesConManoN = ["LetrasConMano/N1.png", "LetrasConMano/N2.png", "LetrasConMano/N3.png", "LetrasConMano/N4.png", "LetrasConMano/N5.png", "LetrasConMano/N6.png"];
var imagenesConManoÑ = ["LetrasConMano/Ñ1.png", "LetrasConMano/Ñ2.png", "LetrasConMano/Ñ3.png", "LetrasConMano/Ñ4.png", "LetrasConMano/Ñ5.png", "LetrasConMano/Ñ6.png"];
var imagenesConManoO = ["LetrasConMano/O1.png", "LetrasConMano/O2.png", "LetrasConMano/O3.png", "LetrasConMano/O4.png", "LetrasConMano/O5.png", "LetrasConMano/O6.png"];
var imagenesConManoP = ["LetrasConMano/P1.png", "LetrasConMano/P2.png", "LetrasConMano/P3.png", "LetrasConMano/P4.png", "LetrasConMano/P5.png", "LetrasConMano/P6.png"];
var imagenesConManoQ = ["LetrasConMano/Q1.png", "LetrasConMano/Q3.png", "LetrasConMano/Q5.png", "LetrasConMano/Q7.png", "LetrasConMano/Q9.png", "LetrasConMano/Q12.png"];
var imagenesConManoR = ["LetrasConMano/R1.png", "LetrasConMano/R2.png", "LetrasConMano/R3.png", "LetrasConMano/R4.png", "LetrasConMano/R5.png", "LetrasConMano/R6.png"];
var imagenesConManoS = ["LetrasConMano/S1.png", "LetrasConMano/S2.png", "LetrasConMano/S3.png", "LetrasConMano/S4.png", "LetrasConMano/S5.png", "LetrasConMano/S6.png"];
var imagenesConManoT = ["LetrasConMano/T1.png", "LetrasConMano/T2.png", "LetrasConMano/T3.png", "LetrasConMano/T4.png", "LetrasConMano/T5.png", "LetrasConMano/T6.png"];
var imagenesConManoU = ["LetrasConMano/U1.png", "LetrasConMano/U2.png", "LetrasConMano/U3.png", "LetrasConMano/U4.png", "LetrasConMano/U5.png", "LetrasConMano/U6.png"];
var imagenesConManoV = ["LetrasConMano/V1.png", "LetrasConMano/V2.png", "LetrasConMano/V3.png", "LetrasConMano/V4.png", "LetrasConMano/V5.png", "LetrasConMano/V6.png"];
var imagenesConManoW = ["LetrasConMano/W1.png", "LetrasConMano/W2.png", "LetrasConMano/W3.png", "LetrasConMano/W4.png", "LetrasConMano/W5.png", "LetrasConMano/W6.png"];
var imagenesConManoX = ["LetrasConMano/X1.png", "LetrasConMano/X2.png", "LetrasConMano/X3.png", "LetrasConMano/X4.png", "LetrasConMano/X5.png", "LetrasConMano/X6.png"];
var imagenesConManoY = ["LetrasConMano/Y1.png", "LetrasConMano/Y2.png", "LetrasConMano/Y3.png", "LetrasConMano/Y4.png", "LetrasConMano/Y5.png", "LetrasConMano/Y6.png"];
var imagenesConManoZ = ["LetrasConMano/Z1.png", "LetrasConMano/Z2.png", "LetrasConMano/Z3.png", "LetrasConMano/Z4.png", "LetrasConMano/Z5.png", "LetrasConMano/Z6.png"];

// Crear un array para guardar las imagenes de las letras
//var imagenes = ["Letras/A1.png", "Letras/A2.png", "Letras/A3.png", "Letras/A4.png", "Letras/A5.png", "Letras/A6.png"]; // El array de las imágenes
//var indice = 0; // El índice de la imagen actual

//Se selecciona uno de los fondos disponibles de manera aleatoria
//document.body.style.backgroundImage = url('Fondos/${Math.round(Math.random()*4)}.gif');
//var fondoOriginal = document.body.style.backgroundImage; // Guardamos el fondo que se ha puesto
var fondoOriginal = "url(\"Fondos/Fondo.png\")"; // Guardamos el fondo inicial estático

// Crear un objeto Audio con el archivo de audio que quieras usar
//var sonido = new Audio("pop1.mp3");

// Crear un array con los sonidos de las letras y la música de fondo
var sonidos = [new Audio("Sonidos/pop1.mp3"),new Audio("Sonidos/pop2.mp3"),new Audio("Sonidos/pop3.mp3"),new Audio("Sonidos/pop4.mp3"),new Audio("Sonidos/pop5.mp3")];
var musica = [new Audio("Sonidos/BS1.mp3"),new Audio("Sonidos/BS2.mp3"),new Audio("Sonidos/BS3.mp3")];
// Habilitar el bucle para todas las pistas de música de fondo
musica.forEach(track => track.loop = true);

var sonidosAplausos = [new Audio("Sonidos/aplausos1.mp3"), new Audio("Sonidos/aplausos2.mp3"), new Audio("Sonidos/aplausos3.mp3")];
var sonidosNo = [new Audio("Sonidos/no.mp3")];
var sonidoElegirModo = new Audio("Sonidos/Explicaciones/ElegirModo.mp3");
var sonidoReelegirModo = new Audio("Sonidos/Explicaciones/ReelegirModo.mp3");
var sonidoEligeLetra = new Audio("Sonidos/Explicaciones/EligeLetra.mp3");
var sonidoEligePalabra = new Audio("Sonidos/Explicaciones/EligePalabra.mp3");
var sonidoAciertoNombre = new Audio("Sonidos/Explicaciones/AciertoNombre.mp3");
var sonidoAciertoPalabra = new Audio("Sonidos/Explicaciones/AciertoPalabra.mp3");
var sonidoLetrasImagen = new Audio("Sonidos/Explicaciones/LetrasImagen.mp3");
var sonidoLetrasNombre = new Audio("Sonidos/Explicaciones/LetrasNombre.mp3");
var sonidoCorregir = new Audio("Sonidos/Explicaciones/Corregir.mp3");
var sonidoPresentacion = new Audio("Sonidos/Explicaciones/Presentacion.mp3");
var sonidoConstruyePalabras = new Audio("Sonidos/Explicaciones/ConstruyePalabras.mp3");
var sonidoEscribeTuNombre = new Audio("Sonidos/Explicaciones/EscribeTuNombre.mp3");
var reproduciendo = null;

// --- Ajuste de volumen por defecto ---
sonidos.forEach(s => s.volume = VOLUMEN_GENERAL);
musica.forEach(m => m.volume = VOLUMEN_MUSICA);
sonidosAplausos.forEach(s => s.volume = VOLUMEN_GENERAL);
sonidosNo.forEach(s => s.volume = VOLUMEN_GENERAL);
sonidoElegirModo.volume = VOLUMEN_GENERAL;
sonidoReelegirModo.volume = VOLUMEN_GENERAL;
sonidoEligeLetra.volume = VOLUMEN_GENERAL;
sonidoEligePalabra.volume = VOLUMEN_GENERAL;
sonidoAciertoNombre.volume = VOLUMEN_GENERAL;
sonidoAciertoPalabra.volume = VOLUMEN_GENERAL;
sonidoLetrasImagen.volume = VOLUMEN_GENERAL;
sonidoLetrasNombre.volume = VOLUMEN_GENERAL;
sonidoCorregir.volume = VOLUMEN_GENERAL;
sonidoPresentacion.volume = VOLUMEN_GENERAL;
sonidoConstruyePalabras.volume = VOLUMEN_GENERAL;
sonidoEscribeTuNombre.volume = VOLUMEN_GENERAL;
// ------------------------------------

// Crear una variable para guardar el estado del fondo
var fondoBlanco = false;

// Crear una variable booleana para indicar si el sonido está activado o no
var sonidoActivado = false;

// Variable para controlar la primera visita a la pantalla de inicio
var primeraVisitaInicio = true;
var splashScreenIsActive = true; // Flag para controlar si la animación de bienvenida está activa
var presentacionDebeReproducirse = false; // Flag para encolar la presentación si se hace clic durante la bienvenida

// Variables para controlar si la explicación del teclado ya se ha mostrado
var explicacionMostradaConstruye = false;
var explicacionMostradaNombre = false;

// Control del modo de sonido: 0 = Todo, 1 = Fonemas (sin música), 2 = Muteado
var modoSonido = 0;

// Control del modo de juego: null (inicio), 'construye', 'nombre'
var modoJuego = null;

// Crear variables para guardar los elementos HTML
var fila1 = document.getElementById("fila1");
var fila2 = document.getElementById("fila2");
var fila3 = document.getElementById("fila3");
var fila4 = document.getElementById("fila4");
var fila5 = document.getElementById("fila5");
var fila6 = document.getElementById("fila6");
var fila7 = document.getElementById("fila7");
// var fila8 = document.getElementById("fila8");
// var animacion = document.getElementById("animacion"); // El elemento <img>
var posicion = 0; // La posición horizontal de la imagen

// Crear una variable para guardar el tiempo de retraso entre cada letra
var tiempo = 150;

// --- Nuevos elementos del menú de inicio ---
var menuInicio = document.getElementById("menu-inicio");
var btnConstruye = document.getElementById("iniciar-construye-palabras");
var btnEscribe = document.getElementById("iniciar-escribe-nombre");
var contenedorNombre = document.getElementById("contenedor-nombre");
var inputNombre = document.getElementById("input-nombre");
var promptNombre = document.getElementById("prompt-nombre");
var promptLetras = document.getElementById("prompt-letras");
var tecladoLetrasIniciales = document.getElementById("teclado-letras-iniciales");
var promptPalabras = document.getElementById("prompt-palabras");
var tecladoPalabras = document.getElementById("teclado-palabras");
var logoInicio = document.getElementById("logo-inicio");
var botonPalabraEscuchar = document.getElementById("boton-palabra-escuchar");
var imagenPalabraEscuchar = document.getElementById("imagen-palabra-escuchar");
var botonExplicacion = document.getElementById("boton-explicacion");
var botonPresentacion = document.getElementById("boton-presentacion");
var barraInferior = document.getElementById("barra-inferior");
var backgroundOverlay = document.getElementById("background-transition-overlay");
const barraSuperior = document.getElementById("barra-superior");
var celebracionContenedor = document.getElementById("celebracion-gif-contenedor");
var celebracionGif = document.getElementById("celebracion-gif");

// Crear una variable para guardar el elemento HTML del botón volver
var volver = document.getElementById("volver");
var imagenVolver = document.getElementById("imagen-volver");
var volverContainer = document.getElementById("volver-container");
var textoVolver = document.getElementById("texto-volver");
var tituloInicio = document.getElementById("titulo-inicio");

// Crear una variable para guardar el elemento HTML del botón fondo
var botonFondo = document.getElementById("fondo");
var fondoContainer = document.getElementById("fondo-container");

// Crear una variable para guardar el elemento HTML del botón sonido
var botonSonido = document.getElementById("sonido");
var imagenSonido = document.getElementById("imagen-sonido");
var sonidoContainer = document.getElementById("sonido-container");
var textoSonido = document.getElementById("texto-sonido");

// Crear una variable para guardar el elemento HTML del botón corregir
var botonCorregir = document.getElementById("corregir");
var corregirContainer = document.getElementById("corregir-container");

// Crear una variable para la puntuación
var puntuacion = 0;
var puntuacionDisplay = document.getElementById("puntuacion");
var puntuacionValor = document.getElementById("puntuacion-valor");

var palabraSeleccionada = ""; // Variable para guardar la palabra seleccionada
var letraSeleccionadaInicial = null; // Variable para guardar la letra inicial en modo "Construye"

// Array para llevar un registro de las letras colocadas en pantalla y sus elementos
var letrasColocadas = [];
var animacionesEnCurso = 0; // Contador para animaciones de letras en movimiento

// Set para llevar un registro de las letras cuyos recursos ya han sido precargados en esta sesión
var recursosLetrasCargados = {};

//#endregion

//#region Adición de eventos

// Añadir un evento de clic al botón volver que ejecute la función volverALetras
volver.addEventListener("click", handleVolverClick);

// Añadir un evento de clic al botón fondo que ejecute la función cambiarFondo
botonFondo.addEventListener("click", cambiarFondo);

// Añadir un evento de clic al botón sonido que ejecute la función toggleSonidoGlobal
botonSonido.addEventListener("click", toggleSonidoGlobal);

// Añadir un evento de clic al botón corregir que ejecute la función corregirPalabra
botonCorregir.addEventListener("click", corregirPalabra);

// Añadir un evento de clic al botón de escuchar la palabra
botonPalabraEscuchar.addEventListener("click", async function() {
  if (modoJuego === 'nombre') {
    await reproducirFonemasDePalabra(palabraSeleccionada);
  } else {
    await reproducirSonidoPalabra(palabraSeleccionada);
  }
});

// Añadir un evento de clic al botón de explicación
botonExplicacion.addEventListener("click", reproducirExplicacionTeclado);

// --- Eventos para los nuevos botones del menú ---
btnConstruye.addEventListener("click", iniciarModoConstruye);
btnEscribe.addEventListener("click", iniciarModoNombre);

// --- Evento para el botón de presentación ---
botonPresentacion.addEventListener("click", reproducirPresentacion);
inputNombre.addEventListener("keydown", handleNombreInput);

// Ocultar el botón volver con la propiedad display: none tras cargar la página
document.addEventListener("DOMContentLoaded", async function () {
  // Configurar el estado inicial de los elementos.
  botonCorregir.disabled = true;
  contenedorNombre.style.display = "none";
  // Deshabilitar los botones del menú por defecto hasta que termine la animación de entrada
  btnConstruye.disabled = true;
  btnEscribe.disabled = true;

  // 1. Iniciar y esperar a que termine la secuencia de la pantalla de bienvenida
  await mostrarSplashScreen();

  // 2. Pausa de 0'5 segundos
  await new Promise(r => setTimeout(r, 500));

  // 3. Fundido de entrada del menú
  // La duración de la animación del menú es de 1s (1000ms)
  await Promise.all([
    fadeIn(menuInicio, 'flex', 1000),
    fadeIn(tituloInicio, 'block', 800)
  ]);

  // 4. Descenso de la barra superior
  barraSuperior.style.top = '0'; // Iniciar la animación de descenso
  fadeIn(sonidoContainer, 'flex'); // Mostrar el botón de sonido
  fadeIn(botonPresentacion); // Mostrar el botón de presentación

  // La bienvenida ha terminado, lo notificamos
  splashScreenIsActive = false;

  // Si el usuario hizo clic durante la bienvenida, reproducimos la presentación ahora
  if (presentacionDebeReproducirse) {
    if (modoSonido < 2) {
      // Esperamos a que la presentación termine. Esta función ya se encarga de rehabilitar los botones.
      await reproducirPresentacion();
    }
    presentacionDebeReproducirse = false; // Reseteamos el flag
  } else {
    // Si no se reproduce la presentación, habilitamos los botones del menú manualmente.
    btnConstruye.disabled = false;
    btnEscribe.disabled = false;
  }
});

// Añadir un evento de clic al documento que active el sonido
document.addEventListener("click", function () {
  inicializarAudioConInteraccion();

  // Si es la primera interacción y estamos en el menú de inicio, reproducir la explicación
  if (primeraVisitaInicio && modoJuego === null) {
    // Si la bienvenida sigue activa, encolamos la presentación para después
    if (splashScreenIsActive) {
      presentacionDebeReproducirse = true;
    } else {
      // Si la bienvenida ya ha terminado, la reproducimos directamente
      if (modoSonido < 2) reproducirPresentacion();
    }
    primeraVisitaInicio = false;
  }
});

//#endregion

//#region Funciones de redimensionamiento y responsive

function recalcularPosicionesLetras() {
  // Si no hay letras colocadas en la pantalla, no hay nada que recalcular.
  if (letrasColocadas.length === 0 || letrasColocadas.every(slot => !slot)) {
    return;
  }

  // --- Replicamos EXACTAMENTE la lógica de cálculo de 'gestionarImagenesAnimadas' ---
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const maxImagenes = palabraSeleccionada.length;
  const aspectRatio = 195 / 330;

  let imageWidth = (windowWidth * PERC_PANTALLA_ANCHO_LETRAS) / maxImagenes;
  let imageHeight = imageWidth / aspectRatio;

  if (imageHeight > windowHeight * PERC_PANTALLA_ALTURA_LETRAS) {
    imageHeight = windowHeight * PERC_PANTALLA_ALTURA_LETRAS;
    imageWidth = imageHeight * aspectRatio;
  }

  const targetBottom = windowHeight * PERC_PANTALLA_BASE_LETRAS;
  const targetTop = targetBottom - imageHeight;

  const overlapAmount = imageWidth * PERC_SOLAPAMIENTO;
  const effectiveAdvance = imageWidth - overlapAmount;
  const finalTotalWidth = (maxImagenes > 0) ? (imageWidth + (maxImagenes - 1) * effectiveAdvance) : 0;
  const startLeft = (windowWidth - finalTotalWidth) / 2;

  letrasColocadas.forEach((slot, index) => {
    if (slot && slot.element) {
      const targetPositionHorizontal = startLeft + (index * effectiveAdvance);
      slot.element.style.left = `${targetPositionHorizontal}px`;
      slot.element.style.top = `${targetTop}px`;
      slot.element.style.width = `${imageWidth}px`;
      slot.element.style.height = `${imageHeight}px`;
    }
  });
}

// Event listener para el redimensionamiento de la ventana (con debounce para optimizar)
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(recalcularPosicionesLetras, 100); // Espera 100ms antes de recalcular
});

//#endregion

//#region Funciones de inicialización y audio

// Función para inicializar todos los elementos de audio.
// Debe ser llamada por la primera interacción del usuario para cumplir con las políticas del navegador.
function inicializarAudioConInteraccion() {
  // Si ya está activado, no hacer nada.
  if (sonidoActivado) return;

  sonidoActivado = true;
  console.log("Audio inicializado por interacción del usuario.");

  // Cargar todos los sonidos principales para que estén listos para reproducirse.
  const sonidosACargar = [
    ...sonidos, ...musica, ...sonidosAplausos, ...sonidosNo,
    sonidoElegirModo, sonidoReelegirModo, sonidoEligeLetra, sonidoEligePalabra,
    sonidoAciertoNombre, sonidoAciertoPalabra, sonidoLetrasImagen, sonidoLetrasNombre,
    sonidoCorregir, sonidoPresentacion, sonidoConstruyePalabras, sonidoEscribeTuNombre
  ];

  sonidosACargar.forEach(s => s.load());
}

//#endregion

//#region Funciones de botones

// Muestra la pantalla de bienvenida al iniciar la aplicación
async function mostrarSplashScreen() {
  const splashContainer = document.getElementById('splash-screen');
  const splashLine1 = document.getElementById('splash-line-1');
  const splashLine2 = document.getElementById('splash-line-2');
  const splashLine3 = document.getElementById('splash-line-3');

  // Secuencia de aparición
  await new Promise(r => setTimeout(r, 500)); // Pausa inicial
  splashLine1.style.opacity = '1';
  await new Promise(r => setTimeout(r, 1500)); // Esperar
  splashLine2.style.opacity = '1';
  await new Promise(r => setTimeout(r, 1500)); // Esperar
  splashLine3.style.opacity = '1';
  await new Promise(r => setTimeout(r, 2500)); // Pausa para leer

  // Desaparición
  splashContainer.style.opacity = '0';
  await new Promise(r => setTimeout(r, 1500)); // Esperar a que termine el fundido de salida

  splashContainer.style.display = 'none'; // Ocultar completamente
}

// Crear una función que alterne entre los modos de sonido
function toggleSonidoGlobal() {
  // Deshabilitar temporalmente el botón para evitar clics rápidos
  botonSonido.disabled = true;
  setTimeout(() => {
    botonSonido.disabled = false;
  }, 500); // 500ms de "cooldown"

  // Ciclar entre los 3 estados: 0 (Todo) -> 1 (Fonemas) -> 2 (Mute) -> 0
  modoSonido = (modoSonido + 1) % 3;

  switch (modoSonido) {
    case 0: // 0: Todo activado
      imagenSonido.src = 'Botones/sonido.png';
      textoSonido.textContent = 'Sonido';
      // Si había una música que debía sonar, la reproducimos
      if (reproduciendo !== null) {
        reproducirMusica(reproduciendo);
      }
      break;
    case 1: // 1: Fonemas (sin música de fondo)
      imagenSonido.src = 'Botones/fonemas.png';
      textoSonido.textContent = 'Fonemas';
      // Si hay música sonando, la paramos
      pararMusica();
      break;
    case 2: // 2: Muteado
      imagenSonido.src = 'Botones/silencio.png';
      textoSonido.textContent = 'Silencio';
      // Si hay música sonando, la paramos
      pararMusica();
      break;
  }
}

// Reproduce la presentación de los modos de juego
async function reproducirPresentacion() {
  inicializarAudioConInteraccion();

  // Deshabilitar botones para evitar conflictos
  botonPresentacion.disabled = true;
  btnConstruye.disabled = true;
  btnEscribe.disabled = true;
  botonSonido.disabled = true;

  // Reproducir sonidos secuencialmente con resaltado de botones
  await playSoundAndWait(sonidoPresentacion);

  btnConstruye.classList.add('highlight-menu');
  await playSoundAndWait(sonidoConstruyePalabras);
  btnConstruye.classList.remove('highlight-menu');

  btnEscribe.classList.add('highlight-menu');
  await playSoundAndWait(sonidoEscribeTuNombre);
  btnEscribe.classList.remove('highlight-menu');

  // Rehabilitar botones al finalizar
  botonPresentacion.disabled = false;
  btnConstruye.disabled = false;
  btnEscribe.disabled = false;
  botonSonido.disabled = false;
}

// Gestiona todos los clics en el botón "Volver" y decide qué hacer según el estado del juego.
async function handleVolverClick() {
  // Deshabilitar el botón inmediatamente al pulsarlo para evitar dobles clics o clics durante la transición.
  // Las funciones subsiguientes se encargarán de volver a habilitarlo cuando sea apropiado.
  volver.disabled = true;
  const isWordSelectionVisible = document.getElementById('palabras').style.display === 'block';
  const isNameInputVisible = contenedorNombre.style.display === 'block';
  const isKeyboardVisible = fila6.hasChildNodes();
  const isLetterSelectionVisible = document.getElementById('letras-iniciales').style.display === 'block';

  if (modoJuego === 'construye') {
    if (isKeyboardVisible) {
      // En el teclado, vuelve a la selección de palabras
      await volverAPalabras();
    } else if (isWordSelectionVisible) {
      // En la pantalla de palabras, vuelve a la de letras
      await volverALetras();
    } else if (isLetterSelectionVisible) {
      // En la pantalla de letras, vuelve al menú de inicio con fundido
      await ocultarModoLetrasIniciales();
      await reiniciarAlInicio();
    }
  } else if (modoJuego === 'nombre') {
    if (isKeyboardVisible) {
      // En el teclado, vuelve a la pantalla de introducir nombre
      await volverAIntroducirNombre();
    } else if (isNameInputVisible) {
      // En la pantalla de introducir nombre, vuelve al menú de inicio con fundido
      await ocultarModoNombre();
      await reiniciarAlInicio();
    }
  }
}

// Función para volver a la pantalla de selección de palabras (modo Construye)
async function volverAPalabras() {
  borrarLetrasFinales();
  borrarImagenesAnimadas();
  letrasColocadas = [];
  fadeOut(corregirContainer);
  fadeOut(fondoContainer);
  botonCorregir.disabled = true;
  fondoBlanco = false; // Resetear el estado del fondo
  pararMusica();

  // 1. Iniciar el fundido de vuelta del fondo dinámico si estaba en blanco.
  backgroundOverlay.style.opacity = '1';

  // 2. Esperar a que el fundido termine (500ms).
  await new Promise(resolve => setTimeout(resolve, 500));

  // 3. AHORA, con el fondo dinámico ya opaco, restaurar el fondo estático por detrás.
  document.body.style.backgroundImage = 'url("Fondos/Fondo.png")';
  document.body.style.backgroundColor = 'transparent';

  // 4. Iniciar la animación de deslizamiento hacia arriba.
  backgroundOverlay.classList.remove('visible');

  // 5. Esperar a que el deslizamiento termine (800ms) antes de mostrar el contenido nuevo.
  await new Promise(resolve => setTimeout(resolve, 800));

  await mostrarPalabras(letraSeleccionadaInicial);
}

// Función para volver a la pantalla de introducir nombre (modo Nombre)
async function volverAIntroducirNombre() {
  borrarLetrasFinales();
  borrarImagenesAnimadas();
  letrasColocadas = [];
  fadeOut(corregirContainer);
  fadeOut(fondoContainer);
  botonCorregir.disabled = true;
  fondoBlanco = false; // Resetear el estado del fondo
  pararMusica();

  // 1. Iniciar el fundido de vuelta del fondo dinámico si estaba en blanco.
  backgroundOverlay.style.opacity = '1';

  // 2. Esperar a que el fundido termine (500ms).
  await new Promise(resolve => setTimeout(resolve, 500));

  // 3. AHORA, con el fondo dinámico ya opaco, restaurar el fondo estático por detrás.
  document.body.style.backgroundImage = 'url("Fondos/Fondo.png")';
  document.body.style.backgroundColor = 'transparent';

  // 4. Iniciar la animación de deslizamiento hacia arriba.
  backgroundOverlay.classList.remove('visible');

  // 5. Esperar a que el deslizamiento termine (800ms) antes de mostrar el contenido nuevo.
  await new Promise(resolve => setTimeout(resolve, 800));

  iniciarModoNombre();
}

// Inicia el modo de juego "Construye palabras"
async function iniciarModoConstruye() {
  inicializarAudioConInteraccion();

  // Deshabilitar los botones del menú para evitar dobles clics durante la transición
  btnConstruye.disabled = true;
  btnEscribe.disabled = true;

  modoJuego = 'construye';

  // Reproducir la música de fondo desde el inicio de la transición
  reproducirMusica(0);

  // Ocultar el menú de inicio con fundido
  await Promise.all([
    fadeOut(menuInicio, 1000),
    fadeOut(tituloInicio, 800),
    fadeOut(botonPresentacion)
  ]);
  // Mostrar el botón volver con la propiedad display: block
  logoInicio.style.display = 'none';
  fadeIn(volverContainer, 'flex');
  imagenVolver.src = 'Botones/inicio.png';
  textoVolver.textContent = 'Inicio';
  // Mostrar la puntuación
  fadeIn(puntuacionDisplay);
  volver.disabled = true; // Deshabilitado hasta que se creen los botones

  // Mostrar el contenedor principal (sin animación)
  document.getElementById('letras-iniciales').style.display = 'block';

  // Crear los botones de letras de forma síncrona para que estén listos para la animación
  crearBotones();

  // Animar la aparición de los elementos internos secuencialmente
  await fadeIn(promptLetras, 'block', 800);
  await fadeIn(tecladoLetrasIniciales, 'block', 800);

  // Reproducir la explicación de audio
  await playSoundAndWait(sonidoEligeLetra);

  // Habilitar los botones ahora que son visibles y la explicación ha terminado
  const botonesLetras = document.querySelectorAll('#letras-iniciales button');
  botonesLetras.forEach(b => b.disabled = false);
  volver.disabled = false;

}

// Oculta los elementos de la pantalla "Letras iniciales" con una animación
async function ocultarModoLetrasIniciales() {
  await Promise.all([
    fadeOut(promptLetras, 400),
    fadeOut(tecladoLetrasIniciales, 400)
  ]);
  document.getElementById('letras-iniciales').style.display = 'none';
}

// Inicia el modo de juego "Escribe tu nombre"
async function iniciarModoNombre() {
  inicializarAudioConInteraccion();

  // Deshabilitar los botones del menú para evitar dobles clics durante la transición
  btnConstruye.disabled = true;
  btnEscribe.disabled = true;

  modoJuego = 'nombre';

  // Si venimos del menú principal, lo ocultamos con fundido
  if (menuInicio.style.display === 'flex') {
    await Promise.all([
      fadeOut(menuInicio, 1000),
      fadeOut(tituloInicio, 800),
      fadeOut(botonPresentacion)
    ]);
  }
  logoInicio.style.display = 'none';

  // Mostrar el contenedor principal (sin animación)
  contenedorNombre.style.display = 'block';

  // Mostrar la puntuación
  fadeIn(puntuacionDisplay);

  // Animar la aparición de los elementos internos secuencialmente
  await fadeIn(promptNombre, 'block', 800);
  await fadeIn(inputNombre, 'block', 800);

  inputNombre.disabled = false; // Asegurarse de que el input esté habilitado
  inputNombre.value = ''; // Limpiar el input por si se vuelve a entrar
  inputNombre.focus();

  // Configurar el botón Volver para esta pantalla
  fadeIn(volverContainer, 'flex');
  imagenVolver.src = 'Botones/inicio.png';
  textoVolver.textContent = 'Inicio';
  volver.disabled = false;

  // Establecer un fondo animado para el juego
  // const fondoJuego = `url('Fondos/${Math.round(Math.random()*4)}.gif')`;
  // document.body.style.backgroundImage = fondoJuego;
  // fondoOriginal = fondoJuego; // Guardar como el fondo de esta partida

  reproducirMusica(1);
}

// Oculta los elementos de la pantalla "Escribe tu nombre" con una animación
async function ocultarModoNombre() {
  // Animar la desaparición de los elementos internos en paralelo
  await Promise.all([
    fadeOut(promptNombre, 400),
    fadeOut(inputNombre, 400)
  ]);
  // Ocultar el contenedor principal una vez que los hijos han desaparecido
  contenedorNombre.style.display = 'none';
}

// Gestiona la entrada de teclado en el campo de nombre
async function handleNombreInput(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evitar que el formulario se envíe
    const nombre = inputNombre.value; // No usar trim() todavía para poder detectar espacios

    // Expresión regular que solo permite letras del alfabeto español (mayúsculas y minúsculas)
    const validCharsRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

    if (nombre.length > 0 && nombre.length <= MAX_WORD_LENGTH && validCharsRegex.test(nombre)) {
      // El nombre es válido
      // Deshabilitar el input para evitar envíos múltiples
      inputNombre.disabled = true;

      // Deshabilitar el botón volver inmediatamente para evitar race conditions durante la transición
      volver.disabled = true;

      palabraSeleccionada = nombre;

      // PRECARGA INTELIGENTE: Cargar las imágenes de las letras del nombre antes de la transición
      await precargarRecursosDePalabra(palabraSeleccionada);

      // Iniciar fundido de salida
      await ocultarModoNombre();
      
      // Configurar el botón Volver para la pantalla del teclado
      imagenVolver.src = 'Botones/volver.png';
      textoVolver.textContent = 'Volver';
      volver.disabled = false;

      pararMusica();
      crearTeclado();
    } else {
      // El nombre no es válido, mostrar un mensaje de error detallado
      alert(`El nombre no es válido.\n\nAsegúrate de que:\n- Tiene entre 1 y ${MAX_WORD_LENGTH} letras.\n- No contiene espacios.\n- Solo contiene letras (a-z, A-Z, ñ, Ñ, á, é, í, ó, ú, Á, É, Í, Ó, Ú).`);
    }
  }
}

// Crear una función que vuelva a mostrar los botones de las letras
async function volverALetras() {
  // --- Lógica de fundido de salida ---
  await ocultarModoPalabras();
  // Borrar los botones de las palabras usando la función borrarPalabras()
  borrarPalabras();

  // Detener la música anterior y empezar la nueva
  pararMusica();
  reproducirMusica(0);

  // Configurar el botón Volver para la pantalla de letras
  imagenVolver.src = 'Botones/inicio.png';
  textoVolver.textContent = 'Inicio';
  volver.disabled = true;

  // --- Lógica de aparición de la pantalla de letras (similar a iniciarModoConstruye) ---
  // Mostrar el contenedor principal (sin animación)
  document.getElementById('letras-iniciales').style.display = 'block';

  // Crear los botones de letras de forma síncrona para que estén listos para la animación
  crearBotones();

  // Animar la aparición de los elementos internos secuencialmente
  await fadeIn(promptLetras, 'block', 800);
  await fadeIn(tecladoLetrasIniciales, 'block', 800);

  // Reproducir la explicación de audio
  await playSoundAndWait(sonidoEligeLetra);

  // Habilitar los botones ahora que son visibles y la explicación ha terminado
  const botonesLetras = document.querySelectorAll('#letras-iniciales button');
  botonesLetras.forEach(b => b.disabled = false);
  volver.disabled = false;
}

// Oculta los elementos de la pantalla "Palabras" con una animación
async function ocultarModoPalabras() {
  await Promise.all([
    fadeOut(promptPalabras, 400),
    fadeOut(tecladoPalabras, 400)
  ]);
  // Ocultar el contenedor principal una vez que los hijos han desaparecido
  document.getElementById('palabras').style.display = 'none';
}

// Nueva función para reiniciar la aplicación a la pantalla de inicio
async function reiniciarAlInicio() {
  // Borrar todos los elementos dinámicos
  borrarLetrasIniciales();
  borrarPalabras();
  borrarLetrasFinales();
  borrarImagenesAnimadas();
  pararMusica();
  backgroundOverlay.classList.remove('visible'); // Ocultar el fondo dinámico
  backgroundOverlay.style.opacity = '1'; // Restaurar opacidad para la próxima vez
  document.body.style.backgroundImage = 'url("Fondos/Fondo.png")';
  document.body.style.backgroundColor = 'transparent';
  reproduciendo = null; // Asegurarse de que no hay música de fondo en el menú de inicio

  // Ocultar elementos de juego y mostrar el menú principal
  // Esperar a que todos los elementos de juego se desvanezcan ANTES de continuar
  await Promise.all([
    fadeOut(volverContainer),
    fadeOut(corregirContainer),
    fadeOut(fondoContainer),
    fadeOut(puntuacionDisplay)
  ]);
  contenedorNombre.style.display = 'none';
  document.getElementById('letras-iniciales').style.display = 'none';
  document.getElementById('palabras').style.display = 'none';
  inputNombre.value = '';

  // Mostrar el menú de inicio con fundido
  await Promise.all([
    fadeIn(menuInicio, 'flex', 1000),
    fadeIn(tituloInicio, 'block', 800),
    fadeIn(botonPresentacion)
  ]);
  logoInicio.style.display = 'none'; // El logo permanece oculto

  // Resetear estado
  modoJuego = null;
  fondoBlanco = false; // Resetear el estado del fondo
  // Resetear los flags de las explicaciones para que se muestren la próxima vez
  // explicacionMostradaConstruye = false;
  // explicacionMostradaNombre = false;

  // Reproducir el sonido de re-elección de modo
  await playSoundAndWait(sonidoReelegirModo);

  // Habilitar los botones del menú AHORA que la explicación ha terminado
  btnConstruye.disabled = false;
  btnEscribe.disabled = false;
}

// Crear una función que cambie el fondo de la página
function cambiarFondo() {
  // Esta función solo se usa en la pantalla de letras finales
  if (fondoBlanco) {
    // Si el fondo es blanco, restaurar el dinámico
    backgroundOverlay.style.opacity = '1';
    document.body.style.backgroundColor = 'transparent';
    fondoBlanco = false;

    // Esperar a que la transición de opacidad termine (500ms) antes de restaurar
    // el fondo estático del body. Esto evita que se vea a través del dinámico mientras aparece.
    setTimeout(() => {
      if (!fondoBlanco) document.body.style.backgroundImage = 'url("Fondos/Fondo.png")';
    }, 500); // Coincide con la duración de la transición de opacidad en CSS
  } else {
    // Si el fondo es dinámico, degradarlo a blanco
    backgroundOverlay.style.opacity = '0';
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'white';
    fondoBlanco = true;
  }
}

// --- Funciones de utilidad para transiciones ---

// Muestra un elemento con un fundido de entrada y opcionalmente espera a que termine
async function fadeIn(element, displayType = 'block', duration = 500) {
  if (!element) return;
  element.style.display = displayType;
  // Forzar reflow para asegurar que la transición se aplica
  void element.offsetHeight;
  element.style.opacity = '1';
  // Devolver una promesa que se resuelve cuando la animación termina
  await new Promise(resolve => setTimeout(resolve, duration));
}

// Oculta un elemento con un fundido de salida y opcionalmente espera a que termine
async function fadeOut(element, duration = 500) {
  if (!element) return;
  element.style.opacity = '0';
  // Esperar a que la transición termine para ocultar el elemento del layout
  await new Promise(resolve => setTimeout(resolve, duration));
  // Comprobar de nuevo por si el elemento se ha vuelto a mostrar mientras esperaba
  if (element.style.opacity === '0') {
    element.style.display = 'none';
  }
}

// Crear una función que compruebe la palabra
async function corregirPalabra() {
  // Deshabilitar el botón para evitar múltiples clics
  botonCorregir.disabled = true;
  volver.disabled = true;
  botonExplicacion.disabled = true;
  botonPalabraEscuchar.disabled = true;

  // Deshabilitar el teclado para evitar que se seleccionen nuevas letras durante la animación
  setTecladoFinalEnabled(false);

  // Normalizamos la palabra correcta para quitarle las tildes y la ponemos en mayúsculas
  const palabraCorrectaNormalizada = normalizarTexto(palabraSeleccionada).toUpperCase();
  const promesasDeAnimacion = [];

  for (let i = 0; i < letrasColocadas.length; i++) {
    const slot = letrasColocadas[i];
    // Si el slot no está vacío y la letra es incorrecta (comparando con la palabra normalizada)
    if (slot && slot.letra.toUpperCase() !== palabraCorrectaNormalizada[i]) {
      // Lanzamos la animación de negación y salida
      // Guardamos la promesa para saber cuándo ha terminado
      if (modoSonido < 2) sonidosNo[0].play(); // Reproducir sonido de negación (en modo 0 y 1)
      animacionesEnCurso++; // Incrementar contador para la animación de salida
      promesasDeAnimacion.push(
        animarNegacionYSalida(slot.element, slot.letra)
          .finally(() => { animacionesEnCurso--; }) // Decrementar al finalizar, con éxito o error
      );
      // Marcamos el hueco como vacío para que pueda ser rellenado
      letrasColocadas[i] = null;
    }
  }

  // Esperamos a que todas las animaciones de las letras incorrectas terminen
  await Promise.all(promesasDeAnimacion);

  // Comprobamos si quedan huecos. Si no, es que la palabra es correcta.
  const hayHuecos = letrasColocadas.some(slot => slot === null);
  if (!hayHuecos) {
    // Desactivar el botón volver para evitar solapamientos cuando se ejecute volverALetras() tras la animación de la palabra correcta
    volver.disabled = true;
    await animacionPalabraCorrecta();
  } else {
    // Si todavía hay huecos, reactivamos el teclado para que el usuario pueda corregir
    setTecladoFinalEnabled(true);
    botonExplicacion.disabled = false;
    botonPalabraEscuchar.disabled = false;
    // Y el botón volver, si no hay más animaciones pendientes (que no debería)
    if (animacionesEnCurso === 0) {
      volver.disabled = false;
    }
  }
}

// Función que anima la negación y la salida de una letra incorrecta
function animarNegacionYSalida(imagen, letra) {
  return new Promise(resolve => {
    const letraMayus = letra.toUpperCase();
    // 1. Animación de negación (más lenta)
    setTimeout(() => { imagen.src = `LetrasNegacion/${letraMayus}i.png`; }, 300);
    setTimeout(() => { imagen.src = `LetrasNegacion/${letraMayus}d.png`; }, 600);
    setTimeout(() => { imagen.src = `LetrasNegacion/${letraMayus}i.png`; }, 900);
    setTimeout(() => { imagen.src = `LetrasNegacion/${letraMayus}d.png`; }, 1200);

    // 2. Animación de salida (después de negar) con el mismo estilo que la entrada
    setTimeout(() => {
      const arrayImagenes = getImagenesPorLetra(letra);
      let imagenIndice = 0;
      const cambioInterval = setInterval(() => {
        if (arrayImagenes && arrayImagenes.length > 0) {
          imagenIndice = (imagenIndice + 1) % arrayImagenes.length;
          imagen.src = arrayImagenes[imagenIndice];
        }
      }, 150);

      let posicionHorizontal = parseInt(imagen.style.left, 10);
      const moverInterval = setInterval(() => {
        posicionHorizontal += 5; // Velocidad de salida
        imagen.style.left = posicionHorizontal + "px";
        if (posicionHorizontal > window.innerWidth) {
          clearInterval(moverInterval);
          clearInterval(cambioInterval);
          imagen.remove(); // Eliminar la imagen del DOM
          resolve(); // La animación ha terminado
        }
      }, 20);
    }, 1250); // Iniciar después de la animación de negación
  });
}

//#endregion

//#region Funciones de utilidad

// Función para precargar de forma inteligente solo las imágenes necesarias para una palabra
async function precargarRecursosDePalabra(palabra) {
  // 1. Obtener las letras únicas de la palabra para no cargar recursos de la 'A' dos veces si la palabra es 'CASA'
  const letrasUnicasOriginales = [...new Set(normalizarTexto(palabra).toUpperCase().split(''))];
  
  // Filtrar para precargar solo las letras que no han sido cargadas antes
  const letrasACargar = letrasUnicasOriginales.filter(letra => recursosLetrasCargados[letra] !== 'full');

  // Si no hay letras nuevas que cargar, salimos de la función inmediatamente.
  if (letrasACargar.length === 0) {
    console.log(`Todos los recursos para "${palabra}" ya estaban precargados.`);
    return;
  }

  const promesasDeCarga = [];
  console.log(`Iniciando precarga para las letras nuevas: ${letrasACargar.join(', ')}`);

  letrasACargar.forEach(letra => {
    let imagenesParaEsteCiclo = [];

    if (recursosLetrasCargados[letra] === 'partial') {
      // Si ya está parcialmente cargada, solo cargamos lo que falta (animaciones de victoria)
      console.log(`Actualizando precarga de '${letra}' de partial a full.`);
      imagenesParaEsteCiclo = [
        ...getImagenesConManoPorLetra(letra),
        `LetrasParadas/${letra}1.png`,
        `LetrasParadas/${letra}2.png`
      ];
    } else {
      // Si no está cargada, cargamos todo
      console.log(`Realizando precarga full para '${letra}'.`);
      imagenesParaEsteCiclo = [
        ...getImagenesPorLetra(letra),
        ...getImagenesConManoPorLetra(letra),
        `LetrasNegacion/${letra}i.png`, `LetrasNegacion/${letra}d.png`,
        `LetrasParadas/${letra}1.png`, `LetrasParadas/${letra}2.png`,
        `LetrasParadas/${letra}.png`
      ];
    }

    // 3. Para cada URL de imagen, crear una promesa de carga
    imagenesParaEsteCiclo.forEach(url => {
      const promesa = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(); // La imagen se ha cargado en caché
        img.onerror = () => resolve(); // Resolvemos igualmente para no bloquear la app si una imagen falla
        img.src = url;
      });
      promesasDeCarga.push(promesa);
    });

    // Añadir la letra al registro para no volver a cargarla.
    recursosLetrasCargados[letra] = 'full';
  });

  // 4. Esperar a que TODAS las promesas de carga de imágenes se completen
  await Promise.all(promesasDeCarga);
  console.log(`Precarga para "${palabra}" completada.`);
}

// Función específica para precargar los recursos de una letra incorrecta justo cuando se pulsa
async function precargarRecursosLetraIncorrecta(letra) {
  const letraMayus = letra.toUpperCase();

  // Si los recursos para esta letra ya fueron cargados (parcial o totalmente), no hacer nada.
  if (recursosLetrasCargados[letraMayus]) {
    console.log(`Recursos para la letra incorrecta "${letraMayus}" ya estaban precargados.`);
    return;
  }

  // No necesitamos letras únicas aquí, es solo una.
  const promesasDeCarga = [];
  console.log(`Iniciando precarga bajo demanda para la letra incorrecta: ${letraMayus}`);

  // 1. Crear una lista con las imágenes necesarias para una letra incorrecta
  const imagenesNormales = getImagenesPorLetra(letraMayus); // Animación de caminar
  const imagenesNegacion = [`LetrasNegacion/${letraMayus}i.png`, `LetrasNegacion/${letraMayus}d.png`]; // Animación de negación
  const imagenParada = [`LetrasParadas/${letraMayus}.png`]; // Imagen estática final (aunque no se usará, es bueno tenerla)

  const todasLasImagenes = [
    ...imagenesNormales,
    ...imagenesNegacion,
    ...imagenParada
  ];

  // 2. Para cada URL de imagen, crear una promesa de carga
  todasLasImagenes.forEach(url => {
    const promesa = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = url;
    });
    promesasDeCarga.push(promesa);
  });

  await Promise.all(promesasDeCarga);
  console.log(`Precarga bajo demanda para "${letraMayus}" completada.`);

  // Marcar la letra como parcialmente cargada. No sobreescribirá si ya es 'full'.
  recursosLetrasCargados[letraMayus] = 'partial';
}

// Función para precargar las imágenes de las palabras de una letra inicial.
// Se llama al seleccionar una letra para que la siguiente pantalla cargue más rápido.
async function precargarRecursosDeLetraInicial(letra) {
  var palabras;
  // Reutilizamos la misma lógica de selección de palabras
  switch (letra) {
    case "Q": palabras = palabrasQ; break;
    case "W": palabras = palabrasW; break;
    case "E": palabras = palabrasE; break;
    case "R": palabras = palabrasR; break;
    case "T": palabras = palabrasT; break;
    case "Y": palabras = palabrasY; break;
    case "U": palabras = palabrasU; break;
    case "I": palabras = palabrasI; break;
    case "O": palabras = palabrasO; break;
    case "P": palabras = palabrasP; break;
    case "A": palabras = palabrasA; break;
    case "S": palabras = palabrasS; break;
    case "D": palabras = palabrasD; break;
    case "F": palabras = palabrasF; break;
    case "G": palabras = palabrasG; break;
    case "H": palabras = palabrasH; break;
    case "J": palabras = palabrasJ; break;
    case "K": palabras = palabrasK; break;
    case "L": palabras = palabrasL; break;
    case "Ñ": palabras = palabrasÑ; break;
    case "Z": palabras = palabrasZ; break;
    case "X": palabras = palabrasX; break;
    case "C": palabras = palabrasC; break;
    case "V": palabras = palabrasV; break;
    case "B": palabras = palabrasB; break;
    case "N": palabras = palabrasN; break;
    case "M": palabras = palabrasM; break;
    default: palabras = [];
  }

  if (palabras.length === 0) return;

  console.log(`Iniciando precarga de imágenes de palabras para la letra: ${letra}`);
  const promesasDeCarga = palabras.map(palabra => {
    return new Promise(resolve => {
      const img = new Image();
      img.src = `Palabras/${palabra}.png`;
      img.onload = resolve;
      img.onerror = resolve; // Resolver incluso si hay un error para no bloquear nada.
    });
  });

  await Promise.all(promesasDeCarga);
  console.log(`Precarga de palabras para "${letra}" completada.`);
}

// Función para reproducir el sonido de una palabra
async function reproducirSonidoPalabra(palabra, rehabilitarBotones = true) {
  if (modoSonido < 2 && palabra) {
    // Deshabilitar botones durante la reproducción
    botonPalabraEscuchar.disabled = true;
    botonExplicacion.disabled = true;
    volver.disabled = true;
    botonCorregir.disabled = true;
    setTecladoFinalEnabled(false);

    const sonidoPalabra = new Audio(`Sonidos/Palabras/${palabra}.mp3`);
    sonidoPalabra.volume = VOLUMEN_GENERAL; // Asegurar que los sonidos dinámicos también tengan el volumen bajo
    
    // Usar una promesa para esperar a que el sonido termine
    await new Promise(resolve => {
      sonidoPalabra.onended = resolve;
      sonidoPalabra.onerror = resolve;
      sonidoPalabra.play().catch(resolve);
    });

    // Si se indica, rehabilitar los botones al finalizar.
    // Esto se omite durante transiciones de pantalla.
    if (rehabilitarBotones) {
      botonPalabraEscuchar.disabled = false;
      botonExplicacion.disabled = false;
      setTecladoFinalEnabled(true);
      // Solo habilitar volver si no hay animaciones de letras en curso
      if (animacionesEnCurso === 0) {
        volver.disabled = false;
      }
      // Habilitar el botón de corregir solo si todos los huecos están llenos
      const todasEnSuSitio = letrasColocadas.every(slot => slot && slot.element);
      if (todasEnSuSitio) {
        botonCorregir.disabled = false;
      }
    }
  }
}

// Función auxiliar para reproducir un sonido y esperar a que termine
function playSoundAndWait(sound) {
  return new Promise(resolve => {
    if (modoSonido < 2 && sound) {
      sound.onended = resolve;
      sound.onerror = () => {
        console.error("Error al reproducir sonido, continuando...");
        resolve();
      };
      sound.play().catch(e => {
        console.error("Error en play() de sonido:", e);
        resolve();
      });
    } else {
      resolve(); // Resolver inmediatamente si el sonido está desactivado o es nulo
    }
  });
}

// Función que reproduce la explicación de audio para la pantalla del teclado
async function reproducirExplicacionTeclado() {
  // Deshabilitar botones para evitar interferencias durante la explicación
  volver.disabled = true;
  botonExplicacion.disabled = true;
  botonPalabraEscuchar.disabled = true;
  botonCorregir.disabled = true;
  setTecladoFinalEnabled(false); // Deshabilitar el teclado

  let sonidoInicial;
  if (modoJuego === 'construye') {
    sonidoInicial = sonidoLetrasImagen;
  } else if (modoJuego === 'nombre') {
    sonidoInicial = sonidoLetrasNombre;
  }

  // Resaltar el botón de escuchar mientras suena la primera explicación
  if (modoSonido < 2) {
    botonPalabraEscuchar.classList.add('highlight-no-color');
  }
  await playSoundAndWait(sonidoInicial);
  botonPalabraEscuchar.classList.remove('highlight-no-color');

  // Resaltar y reproducir sonido de "Corregir"
  if (modoSonido < 2) {
    corregirContainer.classList.add('highlight');
    // Con el CSS corregido, ya no es necesario forzar un reflow o ceder el control.
    await playSoundAndWait(sonidoCorregir);
    corregirContainer.classList.remove('highlight');
  }

  // Rehabilitar los botones al finalizar
  // Solo habilitar volver si no hay animaciones de letras en curso
  if (animacionesEnCurso === 0) {
    volver.disabled = false;
  }
  botonExplicacion.disabled = false;
  botonPalabraEscuchar.disabled = false;
  setTecladoFinalEnabled(true); // Rehabilitar el teclado

  // Habilitar el botón de corregir solo si todos los huecos están llenos
  const todasEnSuSitio = letrasColocadas.every(slot => slot && slot.element);
  if (todasEnSuSitio) {
    botonCorregir.disabled = false;
  }
}
// Función para reproducir los fonemas de una palabra secuencialmente
async function reproducirFonemasDePalabra(palabra) {
  if (modoSonido >= 2 || !palabra) return;

  botonPalabraEscuchar.disabled = true;
  botonExplicacion.disabled = true;
  volver.disabled = true;
  botonCorregir.disabled = true;
  setTecladoFinalEnabled(false);

  const letras = normalizarTexto(palabra).toUpperCase().split('');
  let i = 0;
  while (i < letras.length) {
    let fonema = '';
    let avance = 1;

    const letraActual = letras[i];
    const letraSiguiente = (i + 1 < letras.length) ? letras[i + 1] : null;

    // Comprobar dígrafos
    if (letraActual === 'C' && letraSiguiente === 'H') {
      fonema = 'CH';
      avance = 2;
    } else if (letraActual === 'L' && letraSiguiente === 'L') {
      fonema = 'LL';
      avance = 2;
    } else if (letraActual === 'R' && letraSiguiente === 'R') {
      fonema = 'RR';
      avance = 2;
    } else if (letraActual === 'H') {
      fonema = null; // La H es muda
    } else {
      fonema = letraActual;
    }

    if (fonema) {
      const sonidoFonema = new Audio(`Sonidos/Fonemas/${fonema}.mp3`);
      // Ajustar volumen: VOLUMEN_MOD_FONEMAS en modo Fonemas, VOLUMEN_GENERAL en modo normal
      sonidoFonema.volume = (modoSonido === 1) ? VOLUMEN_MOD_FONEMAS : VOLUMEN_GENERAL;
      await new Promise(resolve => {
        sonidoFonema.onended = resolve;
        sonidoFonema.onerror = resolve; // Continuar aunque falle un sonido
        sonidoFonema.play().catch(resolve);
      });
    }
    i += avance;
  }
  botonPalabraEscuchar.disabled = false;
  botonExplicacion.disabled = false;
  setTecladoFinalEnabled(true);
  // Solo habilitar volver si no hay animaciones de letras en curso
  if (animacionesEnCurso === 0) {
    volver.disabled = false;
  }
  // Habilitar el botón de corregir solo si todos los huecos están llenos
  const todasEnSuSitio = letrasColocadas.every(slot => slot && slot.element);
  if (todasEnSuSitio) {
    botonCorregir.disabled = false;
  }
}
// Función para normalizar texto (quitar tildes, pero mantener la Ñ)
function normalizarTexto(texto) {
  const mapaAcentos = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U'
    // La Ñ/ñ no se incluye para que no la modifique
  };
  
  return texto.split('').map(letra => mapaAcentos[letra] || letra).join('');
}

// Habilita o deshabilita todos los botones del teclado inferior
function setTecladoFinalEnabled(isEnabled) {
  const contenedorTeclado = document.getElementById("letras-finales");
  const botones = contenedorTeclado.getElementsByTagName("button");
  for (const boton of botones) {
      boton.disabled = !isEnabled;
  }
}

//#endregion

//#region Funciones de creación de botones

// Crear una función que cree los botones de las letras
function crearBotones() {

  // Crear un bucle for que recorra el array de letras
  for (var i = 0; i < letras.length; i++) {
    const letraActual = letras[i];
    // Crear un elemento de tipo botón
    var boton = document.createElement("button");

    // Asignarle el texto con la letra del array
    //boton.textContent = letraActual; // Para poner texto en lugar de imágenes
    // Para poner una imagen en lugar de texto
    var img = document.createElement("img");
    img.src = `LetrasParadas/${letraActual}.png`;
    img.alt = letraActual;
    boton.appendChild(img);

    boton.disabled = true; // Deshabilitar el botón inicialmente, se habilitará tras la animación

    // Añadirlo a la fila correspondiente con appendChild
    if (i < 10) { // Primera fila
      fila1.appendChild(boton);
    } else if (i < 20) { // Segunda fila
      fila2.appendChild(boton);
    } else { // Tercera fila
      fila3.appendChild(boton);
    }

    // Añadir un evento de clic al botón que ejecute la función mostrarPalabras
    boton.addEventListener("click", async function() {
      // Deshabilitar todos los botones de letras para evitar clics múltiples durante la transición
      const todosLosBotonesDeLetra = document.querySelectorAll('#letras-iniciales button');
      todosLosBotonesDeLetra.forEach(b => b.disabled = true);

      // Deshabilitar el botón volver inmediatamente para evitar race conditions durante la transición
      volver.disabled = true;
      pararMusica();
      letraSeleccionadaInicial = letraActual; // Guardar la letra seleccionada

      // Iniciar la precarga en segundo plano sin esperar a que termine (fire and forget)
      precargarRecursosDeLetraInicial(letraActual);

      await mostrarPalabras(letraActual);
    });
  }
}

// Crear una función que reciba una letra como parámetro y muestre los botones de las palabras correspondientes
async function mostrarPalabras(letra) {

  reproducirMusica(1);

  // --- Lógica de fundido de salida ---
  await ocultarModoLetrasIniciales();

  // Borrar los botones de las letras y ocultar su contenedor
  borrarLetrasIniciales();

  // --- Lógica de fundido de entrada para palabras ---
  document.getElementById('palabras').style.display = 'block';
  await fadeIn(promptPalabras, 'block', 800);
  fadeIn(tecladoPalabras, 'flex', 800); // Inicia el fundido del contenedor del teclado

  // Configurar el botón Volver para la pantalla de palabras
  imagenVolver.src = 'Botones/volver.png';
  textoVolver.textContent = 'Volver';
  volver.disabled = true; // Deshabilitar hasta que se creen los botones

  // Crear una variable para guardar el array de palabras según la letra
  var palabras;
  // Crear un array para almacenar los botones
  var botones = [];
  // Usar un switch para asignar el array adecuado según la letra
  switch (letra) {
    case "Q":
      palabras = palabrasQ;
      break;
    case "W":
      palabras = palabrasW;
      break;
    case "E":
      palabras = palabrasE;
      break;
    case "R":
      palabras = palabrasR;
      break;
    case "T":
      palabras = palabrasT;
      break;
    case "Y":
      palabras = palabrasY;
      break;
    case "U":
      palabras = palabrasU;
      break;
    case "I":
      palabras = palabrasI;
      break;
    case "O":
      palabras = palabrasO;
      break;
    case "P":
      palabras = palabrasP;
      break;
    case "A":
      palabras = palabrasA;
      break;
    case "S":
      palabras = palabrasS;
      break;
    case "D":
      palabras = palabrasD;
      break;
    case "F":
      palabras = palabrasF;
      break;
    case "G":
      palabras = palabrasG;
      break;
    case "H":
      palabras = palabrasH;
      break;
    case "J":
      palabras = palabrasJ;
      break;
    case "K":
      palabras = palabrasK;
      break;
    case "L":
      palabras = palabrasL;
      break;
    case "Ñ":
      palabras = palabrasÑ;
      break;
    case "Z":
      palabras = palabrasZ;
      break;
    case "X":
      palabras = palabrasX;
      break;
    case "C":
      palabras = palabrasC;
      break;
    case "V":
      palabras = palabrasV;
      break;
    case "B":
      palabras = palabrasB;
      break;
    case "N":
      palabras = palabrasN;
      break;
    case "M":
      palabras = palabrasM;
      break;
    default:
      palabras = [];
  }

  // Calcular el punto medio para dividir las palabras en dos filas
  const mitad = Math.ceil(palabras.length / 2);

  // Reproducir la explicación de audio AHORA, justo antes de crear los botones.
  await playSoundAndWait(sonidoEligePalabra);

  // Crear un bucle for que recorra el array de palabras
  for (var i = 0; i < palabras.length; i++) {
    // Crear una función anónima que reciba el índice del array como parámetro
    (function (j) {
      // Usar la función setTimeout para crear un retraso entre cada palabra
      setTimeout(function () {
        const palabra = palabras[j];
        // Crear un elemento de tipo botón
        var boton = document.createElement("button");

        // Crear el elemento de imagen y añadirlo al botón
        var img = document.createElement("img");
        img.src = `Palabras/${palabra}.png`;
        img.alt = palabra;
        boton.appendChild(img);

        boton.disabled = true; // Deshabilitar el botón inicialmente
        botones.push(boton); // Guardar el botón en el array

        // Añadirlo a la fila correspondiente con appendChild
        if (j < mitad) { // Primera mitad va a la fila 4
          fila4.appendChild(boton);
        } else { // Segunda mitad va a la fila 5
          fila5.appendChild(boton);
        }

        // Reproducir el sonido con el método play()
        if (modoSonido < 2) sonidos[Math.round(Math.random()*4)].play();

        // Añadir un evento de clic al botón que ejecute la función que quieras
        boton.addEventListener("click", async function() {
          // Deshabilitar todos los botones para evitar clics múltiples durante la preview
          botones.forEach(b => b.disabled = true);
          volver.disabled = true;
          // Mostrar la preview de la palabra
          await mostrarPreviewPalabra(palabra);
        });

        if (j === palabras.length - 1) { // Último botón creado
          botones.forEach(function (boton) {
            boton.disabled = false;
          });
          // Activar el botón volver solo cuando todos los botones de palabras se hayan creado
          volver.disabled = false;
        }
        
      }, tiempo * j); // Multiplicar el tiempo por el índice para crear un efecto secuencial
    })(i); // Invocar la función anónima con el índice del bucle como argumento
  }
}

// Crear una función que cree los botones de las letras
async function crearTeclado() {

  // 1. Iniciar la animación del fondo dinámico
  //const fondoJuego = `url('Fondos/${Math.floor(Math.random() * 5)}.gif')`;
  const fondoJuego = `url('Fondos/${Math.floor(Math.random() * 9)}.png')`;
  backgroundOverlay.style.backgroundImage = fondoJuego;
  backgroundOverlay.classList.add('visible');
  fondoOriginal = fondoJuego; // Actualizar el fondo "original" para esta pantalla

  // 2. Esperar a que la animación del fondo termine (0.8s)
  await new Promise(resolve => setTimeout(resolve, 800));

  // 3. Ahora que el fondo está en su sitio, preparar el resto de la interfaz
  animacionesEnCurso = 0;

  // Habilitar el botón volver, ya que no hay animaciones al inicio
  volver.disabled = false;

  // Asegurarse de que los botones de ayuda estén habilitados al entrar
  botonExplicacion.disabled = false;
  botonPalabraEscuchar.disabled = false;

  // Mostrar el botón de corregir
  fadeIn(corregirContainer, 'flex');
  fadeIn(fondoContainer, 'flex');
  botonCorregir.disabled = true; // El botón corregir empieza siempre deshabilitado

  // Inicializar el array de letras colocadas con huecos (null)
  letrasColocadas = new Array(palabraSeleccionada.length).fill(null);

  // 4. Iniciar la animación de la barra inferior (que contiene el teclado y los botones de ayuda)
  barraInferior.classList.add('visible');

  // --- Configurar y mostrar el botón de escuchar palabra ---
  if (modoJuego === 'nombre') {
    imagenPalabraEscuchar.src = 'Botones/nombre.png';
  } else {
    imagenPalabraEscuchar.src = `Palabras/${palabraSeleccionada}.png`;
  }
  // -------------------------------------------------------------

  reproducirMusica(2);
  // Crear un bucle for que recorra el array de letras
  for (var i = 0; i < letras.length; i++) {
    // Crear una función anónima que reciba el índice del array como parámetro
    (function (j) {
      // Usar la función setTimeout para crear un retraso entre cada letra
      //setTimeout(function () {
        // Crear un elemento de tipo botón
        var boton = document.createElement("button");
        // Asignarle el texto con la letra del array
        boton.textContent = letras[j];
        // Añadirlo a la fila correspondiente con appendChild
        // if (j < 10) { // Primera fila
        //   fila6.appendChild(boton);
        // } else if (j < 20) { // Segunda fila
        //   fila7.appendChild(boton);
        // } else { // Tercera fila
        //   fila8.appendChild(boton);
        // }
        // Añadirlo a la fila correspondiente con appendChild
        if (j < 14) { // Primera fila
          fila6.appendChild(boton);
        } else { // Segunda fila
          fila7.appendChild(boton);
        }
        // Reproducir el sonido con el método play()
        // if (modoSonido < 2) sonidos[Math.round(Math.random()*4)].play();
        // Añadir un evento de clic al botón que ejecute la función mostrarPalabras
        boton.addEventListener("click", async function() {
          // Comprobar si la letra pulsada está en la palabra correcta.
          const letrasCorrectas = [...new Set(normalizarTexto(palabraSeleccionada).toUpperCase().split(''))];
          if (!letrasCorrectas.includes(letras[j])) {
            await precargarRecursosLetraIncorrecta(letras[j]);
          }
			    await gestionarImagenesAnimadas(palabraSeleccionada, letras[j]); // Pasar la letra seleccionada
        });
        
      //}, tiempo * 3 * j); // Multiplicar el tiempo por el índice para crear un efecto secuencial
    })(i); // Invocar la función anónima con el índice del bucle como argumento
  }

  // --- Lógica de explicaciones de audio ---
  // Reproducir la explicación solo la primera vez que se entra en cada modo
  if (modoJuego === 'construye' && !explicacionMostradaConstruye) {
    await reproducirExplicacionTeclado();
    explicacionMostradaConstruye = true;
  } else if (modoJuego === 'nombre' && !explicacionMostradaNombre) {
    await reproducirExplicacionTeclado();
    explicacionMostradaNombre = true;
  }
}

// Muestra una preview de la palabra seleccionada y luego avanza a la siguiente pantalla
async function mostrarPreviewPalabra(palabra) {
  // Crear el contenedor de la preview
  const overlay = document.createElement('div');
  overlay.id = 'preview-overlay';

  // Crear la imagen grande
  const previewImg = document.createElement('img');
  previewImg.id = 'preview-imagen';
  previewImg.src = `Palabras/${palabra}.png`;
  previewImg.alt = `Imagen de ${palabra}`;

  overlay.appendChild(previewImg);
  document.body.appendChild(overlay);

  // Iniciar la reproducción del sonido y la precarga de recursos en paralelo
  // para aprovechar el tiempo de la preview.
  const promesaSonido = reproducirSonidoPalabra(palabra, false); // No rehabilitar botones, estamos en transición
  const promesaPrecarga = precargarRecursosDePalabra(palabra);
  await Promise.all([promesaSonido, promesaPrecarga]);

  // Después de un tiempo, eliminar la preview y continuar
  await new Promise(resolve => setTimeout(resolve, 2500)); // 2.5 segundos de preview

  document.body.removeChild(overlay);

  // --- Lógica de fundido de salida ---
  await ocultarModoPalabras();

  palabraSeleccionada = palabra;
  pararMusica();
  borrarPalabras();
  crearTeclado();
}

//#endregion

//#region Funciones de borrado

// Crear una función que borre los botones de las letras iniciales
function borrarLetrasIniciales() {

  // Borrar los botones de las letras usando la función removeChild()
  while (fila1.firstChild) {
    fila1.removeChild(fila1.firstChild);
  }
  while (fila2.firstChild) {
    fila2.removeChild(fila2.firstChild);
  }
  while (fila3.firstChild) {
    fila3.removeChild(fila3.firstChild);
  }
}

// Crear una función que borre los botones de las palabras
function borrarPalabras() {

  // Borrar los botones de las palabras usando la función removeChild()
  while (fila4.firstChild) {
    fila4.removeChild(fila4.firstChild);
  }
  while (fila5.firstChild) {
    fila5.removeChild(fila5.firstChild);
  }
}

// Crear una función que borre los botones de las letras finales
function borrarLetrasFinales() {

  // Ocultar la barra inferior que contiene el teclado y los botones de ayuda
  barraInferior.classList.remove('visible');

  // Esperar a que la animación de salida termine (500ms) antes de borrar los botones
  setTimeout(() => {
    // Borrar los botones de las letras usando la función removeChild()
    while (fila6.firstChild) {
      fila6.removeChild(fila6.firstChild);
    }
    while (fila7.firstChild) {
      fila7.removeChild(fila7.firstChild);
    }
  }, 500); // 500ms es la duración de la transición en CSS
}

// Crear una función que borre las imagenes animadas
function borrarImagenesAnimadas() {
  var contenedorImagenes = document.getElementById("letras-imagenes");
  var imagenesActuales = contenedorImagenes.getElementsByTagName("img");

  // Borrar todas las imágenes animadas del contenedor
  while (imagenesActuales.length > 0) {
    contenedorImagenes.removeChild(imagenesActuales[0]);
  }
}

//#endregion

//#region Funciones de música

//Crear una función que resetee la música de fondo
function pararMusica(){
  if (reproduciendo !== null) {
    musica[reproduciendo].pause();
    musica[reproduciendo].currentTime = 0;
  }
}

//Crear una función que resetee la música de fondo
function reproducirMusica(j){
  reproduciendo = j;
  // Solo reproducir si estamos en el modo de sonido completo
  if (modoSonido === 0) {
    musica[j].play();
  }
}

//#endregion

//#region Funciones de animación

// Helper para obtener el array de imágenes de animación según la letra
function getImagenesPorLetra(letra) {
  switch (letra.toUpperCase()) {
    case "A": return imagenesA;
    case "B": return imagenesB;
    case "C": return imagenesC;
    case "D": return imagenesD;
    case "E": return imagenesE;
    case "F": return imagenesF;
    case "G": return imagenesG;
    case "H": return imagenesH;
    case "I": return imagenesI;
    case "J": return imagenesJ;
    case "K": return imagenesK;
    case "L": return imagenesL;
    case "M": return imagenesM;
    case "N": return imagenesN;
    case "Ñ": return imagenesÑ;
    case "O": return imagenesO;
    case "P": return imagenesP;
    case "Q": return imagenesQ;
    case "R": return imagenesR;
    case "S": return imagenesS;
    case "T": return imagenesT;
    case "U": return imagenesU;
    case "V": return imagenesV;
    case "W": return imagenesW;
    case "X": return imagenesX;
    case "Y": return imagenesY;
    case "Z": return imagenesZ;
    default: return [];
  }
}

// Helper para obtener el array de imágenes de animación con manos dadas
function getImagenesConManoPorLetra(letra) {
  switch (letra.toUpperCase()) {
    case "A": return imagenesConManoA;
    case "B": return imagenesConManoB;
    case "C": return imagenesConManoC;
    case "D": return imagenesConManoD;
    case "E": return imagenesConManoE;
    case "F": return imagenesConManoF;
    case "G": return imagenesConManoG;
    case "H": return imagenesConManoH;
    case "I": return imagenesConManoI;
    case "J": return imagenesConManoJ;
    case "K": return imagenesConManoK;
    case "L": return imagenesConManoL;
    case "M": return imagenesConManoM;
    case "N": return imagenesConManoN;
    case "Ñ": return imagenesConManoÑ;
    case "O": return imagenesConManoO;
    case "P": return imagenesConManoP;
    case "Q": return imagenesConManoQ;
    case "R": return imagenesConManoR;
    case "S": return imagenesConManoS;
    case "T": return imagenesConManoT;
    case "U": return imagenesConManoU;
    case "V": return imagenesConManoV;
    case "W": return imagenesConManoW;
    case "X": return imagenesConManoX;
    case "Y": return imagenesConManoY;
    case "Z": return imagenesConManoZ;
    default: return [];
  }
}

// Orquesta la animación de victoria para una palabra correcta
async function animacionPalabraCorrecta() {
  // 1. Nueva animación de celebración de 7 segundos
  await new Promise(resolve => {
    // Mostrar GIF de celebración aleatorio
    const gifNumero = Math.floor(Math.random() * 6) + 1;
    celebracionGif.src = `Celebracion/celebracion_${gifNumero}.gif`;
    celebracionContenedor.style.display = 'flex';

    // Reproducir sonido de aplausos
    if (modoSonido < 2) {
      const sonidoAleatorio = sonidosAplausos[Math.floor(Math.random() * sonidosAplausos.length)];
      sonidoAleatorio.play();
      if (modoJuego === 'nombre') {
        sonidoAciertoNombre.play();
      } else {
        sonidoAciertoPalabra.play();
      }
    }

    // Iniciar animación de "baile" de las letras
    let toggleState = false;
    const celebrationInterval = setInterval(() => {
      toggleState = !toggleState;
      letrasColocadas.forEach((slot, index) => {
        if (!slot) return;
        const letraMayus = slot.letra.toUpperCase();
        let suffix = '';
        if (toggleState) {
          // Posiciones impares (índice 0, 2, 4...) usan sufijo '1'
          // Posiciones pares (índice 1, 3, 5...) usan sufijo '2'
          suffix = (index % 2 === 0) ? '1' : '2';
        }
        slot.element.src = `LetrasParadas/${letraMayus}${suffix}.png`;
      });
    }, 400); // Alternar cada 400ms

    // Detener toda la celebración después de 7 segundos
    setTimeout(() => {
      clearInterval(celebrationInterval);
      celebracionContenedor.style.display = 'none';
      // Asegurarse de que todas las letras vuelvan a su estado base para la siguiente animación
      letrasColocadas.forEach(slot => {
        if (slot) {
          slot.element.src = `LetrasParadas/${slot.letra.toUpperCase()}.png`;
        }
      });
      resolve();
    }, 7000);
  });

  // Añadir puntos por la palabra correcta
  puntuacion++;
  puntuacionValor.textContent = puntuacion;

  // 1. Animación de darse la mano
  await new Promise(resolve => {
      letrasColocadas.forEach(slot => {
          const letraMayus = slot.letra.toUpperCase();
          slot.element.src = `LetrasParadas/${letraMayus}1.png`;
      });
      setTimeout(() => {
          letrasColocadas.forEach(slot => {
              const letraMayus = slot.letra.toUpperCase();
              slot.element.src = `LetrasParadas/${letraMayus}2.png`;
          });
          setTimeout(resolve, 500); // Esperar medio segundo después de darse la mano
      }, 500); // Esperar medio segundo para cambiar a la segunda imagen
  });

  // Reproducir el sonido de la palabra correcta si estamos en modo construye
  // (En modo 'nombre', no hay un único archivo de audio para la palabra)
  if (modoJuego === 'construye' && palabraSeleccionada) {
      reproducirSonidoPalabra(palabraSeleccionada, false); // No rehabilitar botones, estamos en transición
      // Pequeña pausa para que el sonido se escuche antes de que las letras se vayan
      await new Promise(resolve => setTimeout(resolve, 500));
  } else {
      // Si no se reproduce sonido, esperamos igualmente un poco para que la animación no sea tan brusca
      await new Promise(resolve => setTimeout(resolve, 500));
  }

  // 2. Animación de salida en grupo
  const promesasSalida = letrasColocadas.map(slot => {
      animacionesEnCurso++; // Incrementar por cada letra que sale
      return animarSalidaEnGrupo(slot.element, slot.letra).finally(() => {
        animacionesEnCurso--; // Decrementar cuando la animación de salida termina
      });
  });
  await Promise.all(promesasSalida);

  // Decidir a dónde ir después de la animación de victoria
  if (modoJuego === 'nombre') {
    // Esperar un poco y volver a la pantalla de introducir nombre, asegurando que las animaciones no se solapen
    await new Promise(resolve => setTimeout(resolve, 500));
    await volverAIntroducirNombre();
  } else {
    // Volver a la pantalla de selección de palabras de la letra actual
    await volverAPalabras();
  }
}

// Anima la salida de una letra usando las imágenes de "LetrasConMano"
function animarSalidaEnGrupo(imagen, letra) {
  return new Promise(resolve => {
    const arrayImagenes = getImagenesConManoPorLetra(letra);
    if (!arrayImagenes || arrayImagenes.length === 0) {
      resolve();
      return;
    }

    let imagenIndice = 0;

    // 1. Establecer la primera imagen de la animación de caminar.
    imagen.src = arrayImagenes[imagenIndice];
    imagenIndice = (imagenIndice + 1) % arrayImagenes.length;

    // 2. Iniciar el intervalo que cambia las imágenes para simular el caminar.
    const cambioInterval = setInterval(() => {
      imagen.src = arrayImagenes[imagenIndice];
      imagenIndice = (imagenIndice + 1) % arrayImagenes.length;
    }, 150);

    // 3. Iniciar el movimiento ligeramente después usando setTimeout.
    // Esto da tiempo al navegador a procesar el cambio de imagen inicial (paso 1)
    // antes de que comience el movimiento, solucionando el desfase visual.
    setTimeout(() => {
      let posicionHorizontal = parseInt(imagen.style.left, 10);
      const moverInterval = setInterval(() => {
        posicionHorizontal += 5; // Velocidad de salida
        imagen.style.left = posicionHorizontal + "px";
        if (posicionHorizontal > window.innerWidth) {
          clearInterval(moverInterval);
          clearInterval(cambioInterval);
          imagen.remove(); // Eliminar la imagen del DOM
          resolve(); // La animación ha terminado
        }
      }, 20);
    }, 10); // Un pequeño retardo de 10ms es suficiente para que no se desplacen las letras sin empezar a animarse.
  });
}

// Crear una función que gestione las imágenes animadas con las restricciones indicadas
async function gestionarImagenesAnimadas(palabraSeleccionada, letraSeleccionada) {
  // Encontrar el primer hueco disponible
  const imagenIndex = letrasColocadas.findIndex(slot => slot === null);

  // Si no hay huecos (findIndex devuelve -1), no hacer nada.
  if (imagenIndex === -1) {
    console.log("No hay huecos libres para la letra:", letraSeleccionada);
    return;
  }

  // Incrementar el contador y deshabilitar botones para evitar acciones conflictivas
  animacionesEnCurso++;
  volver.disabled = true;
  botonCorregir.disabled = true;
  setTecladoFinalEnabled(false); // Deshabilitar el teclado
  botonExplicacion.disabled = true;
  botonPalabraEscuchar.disabled = true;

  // Reservar el hueco inmediatamente para evitar que otra letra lo ocupe
  letrasColocadas[imagenIndex] = { status: 'pending' };

  const contenedorImagenes = document.getElementById("letras-imagenes");

  // --- Obtener dimensiones de la ventana ---
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // --- Calcular tamaño y posición con unidades relativas (vw, vh) ---
  const maxImagenes = palabraSeleccionada.length;
  const aspectRatio = 195 / 330;

  // 1. Calcular el ancho de cada imagen para que todas quepan en el PERC_PANTALLA_ANCHO_LETRAS % de la pantalla
  let imageWidth = (windowWidth * PERC_PANTALLA_ANCHO_LETRAS) / maxImagenes;
  // 2. Calcular la altura manteniendo la proporción
  let imageHeight = imageWidth / aspectRatio;

  // 3. Comprobar que la altura no sea excesiva (ej. en pantallas muy altas y estrechas)
  // Limitamos la altura al  PERC_PANTALLA_ALTURA_LETRAS % de la altura de la ventana (vh)
  if (imageHeight > windowHeight * PERC_PANTALLA_ALTURA_LETRAS) {
    imageHeight = windowHeight * PERC_PANTALLA_ALTURA_LETRAS;
    imageWidth = imageHeight * aspectRatio; // Recalcular el ancho en base a la nueva altura
  }

  // 4. Calcular la posición vertical. Queremos que la base de las letras esté al PERC_PANTALLA_BASE_LETRAS % de la altura de la pantalla.
  const targetBottom = windowHeight * PERC_PANTALLA_BASE_LETRAS;
  const targetTop = targetBottom - imageHeight; // El 'top' es la base menos la altura
  
  // Seleccionar el array de imágenes correspondiente a la letra seleccionada
  var arrayImagenes = getImagenesPorLetra(letraSeleccionada);
  // Asegurarse de que tenemos imágenes para mostrar
  if (!arrayImagenes || arrayImagenes.length === 0) {
      console.error("No hay imágenes de animación definidas para la letra:", letraSeleccionada);
      letrasColocadas[imagenIndex] = null; // Liberar el hueco si no hay imágenes
      return;
  }

  // Crear una nueva imagen animada
  var nuevaImagen = document.createElement("img");
  nuevaImagen.src = arrayImagenes[0]; // Empezar siempre con la primera imagen del array específico
  nuevaImagen.style.position = "absolute";
  nuevaImagen.style.left = -imageWidth + "px"; // Inicia completamente fuera de la pantalla a la izquierda
  nuevaImagen.style.top = targetTop + "px"; // Aplicar la posición vertical calculada
  nuevaImagen.style.height = imageHeight + "px"; // Aplicar la altura calculada dinámicamente
  nuevaImagen.style.width = imageWidth + "px"; // Aplicar el ancho calculado dinámicamente

  // 5. Calcular la posición final horizontal con solapamiento para que estén juntas y centradas
  const overlapAmount = imageWidth * PERC_SOLAPAMIENTO; // PERC_SOLAPAMIENTO % de solapamiento
  const effectiveAdvance = imageWidth - overlapAmount; // Distancia que avanza cada nueva letra
  const finalTotalWidth = (maxImagenes > 0) ? (imageWidth + (maxImagenes - 1) * effectiveAdvance) : 0; // Ancho total del bloque
  const startLeft = (windowWidth - finalTotalWidth) / 2; // Margen izquierdo para centrar el bloque
  const targetPositionHorizontal = startLeft + (imagenIndex * effectiveAdvance);

  // Añadir la nueva imagen al contenedor
  contenedorImagenes.appendChild(nuevaImagen);

  // Animar la nueva imagen, pasando la posición final horizontal y la letra
  animarNuevaImagen(nuevaImagen, arrayImagenes, targetPositionHorizontal, letraSeleccionada, imagenIndex);
}

// función que anima una nueva imagen hasta una posición final
// (Maneja solo el movimiento horizontal y el cambio de sprite/imagen final)
function animarNuevaImagen(imagen, arrayImagenes, targetPositionHorizontal, letraSeleccionada, slotIndex) {
  let posicionHorizontal = parseFloat(imagen.style.left); // Posición inicial (fuera de la pantalla)

  // --- Índice local para ESTA imagen específica ---
  let imagenIndice = 0; // Para la animación de cambio de imagen

  // --- Intervalo para cambiar la imagen (sprite) ---
  // Lo guardamos para poder detenerlo luego
  const cambioInterval = setInterval(function () {
    imagenIndice = (imagenIndice + 1) % arrayImagenes.length;
    imagen.src = arrayImagenes[imagenIndice];
  }, 150); // Velocidad del "parpadeo"

  // --- Intervalo para mover la imagen ---
  // Lo guardamos para poder detenerlo luego
  const moverInterval = setInterval(function () {
     // Ajusta la velocidad si quieres que las letras más pequeñas (palabras largas)
    // tarden más o menos en llegar. Una velocidad fija es más simple.
    posicionHorizontal += 10; // Velocidad de movimiento horizontal (ajusta según necesites)

    // Comprobar si hemos alcanzado o superado la posición final horizontal
    if (posicionHorizontal >= targetPositionHorizontal) {
      // --- ¡Hemos llegado! ---
      // Detener AMBOS intervalos
      clearInterval(moverInterval);
      clearInterval(cambioInterval);

      // Decrementar el contador de animaciones
      animacionesEnCurso--;

      posicionHorizontal = targetPositionHorizontal; // Ajustar exactamente a la posición final
      imagen.style.left = posicionHorizontal + "px"; // Aplicar posición final horizontal

      // Cambiar a la imagen estática final
      // Asegúrate de que la carpeta 'LetrasParadas' existe y contiene las imágenes (A.png, B.png, etc.)
      const imagenParadaSrc = "LetrasParadas/" + letraSeleccionada + ".png";
      imagen.src = imagenParadaSrc;

      // Opcional: Añadir manejo de error si la imagen parada no carga
      imagen.onerror = function() {
          console.error("No se pudo cargar la imagen estática:", imagenParadaSrc);
          // Podrías poner una imagen por defecto o dejar la última del sprite
          // imagen.src = 'path/to/default/image.png';
      };

      // Guardar la referencia a la imagen y la letra en nuestro array de seguimiento
      // Usamos el índice que reservamos al principio para evitar la superposición
      letrasColocadas[slotIndex] = { element: imagen, letra: letraSeleccionada };

      // --- Lógica de reproducción de fonema al llegar ---
      let fonemaASonar = letraSeleccionada.toUpperCase();
      const letraMayus = fonemaASonar;

      // Lógica para dígrafos y letras mudas, comprobando letras adyacentes.
      const letraAnterior = (slotIndex > 0) ? letrasColocadas[slotIndex - 1]?.letra?.toUpperCase() : null;
      const letraSiguiente = (slotIndex < letrasColocadas.length - 1) ? letrasColocadas[slotIndex + 1]?.letra?.toUpperCase() : null;

      // Comprobar si la letra actual forma un dígrafo con sus vecinas
      if ((letraMayus === 'C' && letraSiguiente === 'H') || (letraMayus === 'H' && letraAnterior === 'C')) {
        fonemaASonar = 'CH';
      } else if (letraMayus === 'L' && (letraAnterior === 'L' || letraSiguiente === 'L')) {
        fonemaASonar = 'LL';
      } else if (letraMayus === 'R' && (letraAnterior === 'R' || letraSiguiente === 'R')) {
        fonemaASonar = 'RR';
      }
      
      // La H es muda si no forma parte de CH
      if (letraMayus === 'H' && fonemaASonar !== 'CH') {
        fonemaASonar = null;
      }

      // Reproducir el fonema si corresponde
      if (modoSonido < 2 && fonemaASonar) {
        const sonidoFonema = new Audio(`Sonidos/Fonemas/${fonemaASonar}.mp3`);
        sonidoFonema.volume = (modoSonido === 1) ? VOLUMEN_MOD_FONEMAS : VOLUMEN_GENERAL;
        sonidoFonema.play().catch(e => console.error("Error al reproducir el sonido del fonema:", e));
      }
      // --- Fin de la lógica de fonema ---

      // Comprobar si TODAS las letras han llegado a su posición final.
      const todasEnSuSitio = letrasColocadas.every(slot => slot && slot.element);
      if (todasEnSuSitio) {
        botonCorregir.disabled = false;
      }

      // Si no hay más animaciones en curso, reactivar los botones correspondientes.
      if (animacionesEnCurso === 0) {
        volver.disabled = false;
        botonExplicacion.disabled = false;
        botonPalabraEscuchar.disabled = false;
        // El teclado solo se reactiva si AÚN QUEDAN HUECOS.
        if (!todasEnSuSitio) {
          setTecladoFinalEnabled(true);
        }
      }

      return; // Salir de la función del intervalo una vez detenida
    }

    // Si no hemos llegado, seguir moviendo horizontalmente
    imagen.style.left = posicionHorizontal + "px";

  }, 50); // Ajusta este tiempo para la velocidad de movimiento (intervalo más corto = más rápido)
}

//#endregion