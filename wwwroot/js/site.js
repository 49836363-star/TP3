function ArriesgarLetra() {
    let letra = document.getElementById("letra").value;
    let palabraOculta = document.getElementById("palabraOculta");
    let palabraCorrecta= document.getElementById("palabraAdivinar").value;
    let intentos = parseInt(document.getElementById("intentosRestantes").innerText);
    let nuevaPalabra ="";
    let encontro = false;
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML="";
    if (ValidarLetra(letra) === false)
    {

        mensaje.innerHTML = "Debes ingresar una letra"; 
        return;
    }

    for(let i=0; i<palabraCorrecta.length; i++)
    {
        console.log(letra.toUpperCase() == palabraCorrecta[i]);
        if(letra.toUpperCase() == palabraCorrecta[i])
        {
            nuevaPalabra += letra.toUpperCase();
            encontro=true;
        }
        else
        {
            nuevaPalabra += palabraOculta.innerText[i];            
        }
    }
    
    if (encontro === false)
    {
        intentos++;
    }
    if(intentos >= 10)
    {
        mensaje.innerText = "Perdiste";  
        mensaje.style.color= "red";
        document.getElementById("Arriesgar").disabled = true;
    }
    palabraOculta.innerText = nuevaPalabra;
    document.getElementById("intentosRestantes").innerText = intentos;
    
    if (palabraOculta.innerText.includes("_") === false)
    {
        mensaje.innerText= "Adivinaste la palabra. Has ganadoooo!"
        mensaje.style.color= "green";
        document.getElementById("Arriesgar").disabled = true;
    }
    document.getElementById("letra").value = "";
    document.getElementById("letra").focus();
}
function ValidarLetra(letra)
{
    if (letra.length === 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}