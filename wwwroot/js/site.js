function ArriesgarLetra() {
    let letra = document.getElementById("letra").value;
    let palabraOculta = document.getElementById("palabraOculta");
    let palabraCorrecta= document.getElementById("palabraAdivinar").value;
    let intentos = parseInt(document.getElementById("intentosRestantes").innerText);
    let nuevaPalabra ="";
    let encontro = false;
    
    for(let i=0; i<palabraCorrecta.length; i++)
    {
        console.log(letra.toUpperCase() == palabraCorrecta[i]);
        if(letra.toUpperCase() == palabraCorrecta[i])
        {
            nuevaPalabra += letra;
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
        document.getElementById("mensaje").innerText = "Perdiste";    
    }
    palabraOculta.innerText = nuevaPalabra;
    document.getElementById("intentosRestantes").innerText = intentos;
    


}