
document.getElementById("btn_Registrarse").addEventListener("click",register);
document.getElementById("btn_InicioSesion").addEventListener("click",inisioSesion);
window.addEventListener("resize",anchoPagina);

//Declaracion de variables
let contenedor_login_register=document.querySelector(".contenedor_Login-Register");
let formulario_login=document.querySelector(".formulario_Login");
let formulario_register=document.querySelector(".formulario_Register");
let caja_trasera_login=document.querySelector(".caja_Trasera_Login");
let caja_trasera_register=document.querySelector(".caja_Trasera_Register");


const form_register = document.getElementById("form_register");
const input_usuario = document.getElementById("txt_usuario");
const input_nombre = document.getElementById("txt_nombre");
const input_genero = document.getElementById("select_genero");
const input_fecha = document.getElementById("date_fecha");
const input_email = document.getElementById("txt_email");
const inptu_password = document.getElementById("txt_password");
const input_parrafo = document.getElementById("txt_warnings");

//--------------------------------------------------------------------------------------------

//--------------ANIMACION DE FORMS-----------------------
function anchoPagina(){
    if(window.innerWidth>850){
        caja_trasera_login.style.display="block";
        caja_trasera_register.style.display="block";
    }else{
        caja_trasera_register.style.display="block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function inisioSesion()
{
    if(window.innerWidth>850)
    {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
    }
}

function register(){
    if(window.innerWidth>850)
    {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity="1";
    }
}
//------------------FIN ANIMACION FORMS----------------------------

//------------------ABRIR VENTANA WARNINGS---------------------------
function abrir_ventana(){
    document.getElementById("contenedor-modal").style.display = "flex";
}
//------------------CERRAR VENTANA WARNINGS---------------------------
function cerrar_ventana() {
    document.getElementById("contenedor-modal").style.display = "none";
}
//---------------------VALIDACIONES FORM REGISTER---------------------------
form_register.addEventListener("submit", evento=>{
    evento.preventDefault();

    //REGEX
    let regex_nombre = /([A-Z][a-zÁÉÍÓÚñáéíóúÑ]*)([\\s\\\'-][A-Z][a-zÁÉÍÓÚñáéíóúÑ]*)*/;
    let regex_usuario = /(?=^.{3,}$)([a-zÁÉÍÓÚñáéíóúÑ]*)([\\s\\\'-][A-Z][a-zÁÉÍÓÚñáéíóúÑ]*)*/;
    let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regex_password = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let txt_warnings="";
    let acceso = true;
    input_parrafo.innerHTML="";

    if (input_usuario.value.length == 0 || !regex_usuario.test(input_usuario.value)) {
        txt_warnings+="¡El formato del usuario no es valido!<br>";
        acceso=false;
    }
    if (input_nombre.value.length.length == 0 || !regex_nombre.test(input_nombre.value)) {
        txt_warnings+="¡El formato del nombre no es valido!<br>";
        acceso=false;
    }
    if (calcular_edad() || input_fecha.value=='') {
        txt_warnings+="¡La fecha de nacimiento no es valida!<br>";
        acceso=false;
    }
    if (input_email.value.length.length == 0 || !regex_email.test(input_email.value)) {
        txt_warnings+="¡El formato del email no es valido!<br>";
        acceso=false;
    }
    if (inptu_password.value.length.length == 0 || !regex_password.test(inptu_password.value)) {
        txt_warnings+="¡El formato del password no es valido!<br>";
        acceso=false;
    }

    if (!acceso) {
        input_parrafo.innerHTML=txt_warnings;
        abrir_ventana();
    }else{

        form_register.submit();
    }
})

function calcular_edad(){
    const fecha_nacimiento = document.getElementById("date_fecha");
    const fecha_actual=new Date();
    const ano_actual = parseInt(fecha_actual.getFullYear());
    const mes_actual = parseInt(fecha_actual.getMonth()+1);
    const dia_actual = parseInt(fecha_actual.getDay());

    const ano_nacimiento = parseInt(String(fecha_nacimiento.value).substring(0,4));
    const mes_nacimiento = parseInt(String(fecha_nacimiento.value).substring(5,7));
    const dia_nacimiento = parseInt(String(fecha_nacimiento.value).substring(8,10));
    //por si hay que validar la edad
    let edad = ano_actual - ano_nacimiento;
    if (ano_nacimiento >= ano_actual) {
        return true;
    }

    if (mes_actual < mes_nacimiento) {
        edad--;
    }else if (mes_actual == mes_nacimiento) {
        if (dia_actual < dia_nacimiento) {
        edad--;
        }
    }
    if (edad<18) {
        return true;
    }else{
        return false;
}
}
//------------------FIN VALIDACIONES FORM REGISTER----------------------------

