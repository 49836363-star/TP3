function ArriesgarLetra() {
    let letra = document.getElementById("letra").value;
    let palabraOculta = document.getElementById("palabraOculta");
    let palabraCorrecta= document.getElementById("palabraAdivinar").value;
    let intentos = document.getElementById("intentosRestantes").value;
    
    let nuevaPalabra ="";
    
    for(let i=0; i<palabraCorrecta.length; i++)
    {
        console.log(letra.toUpperCase() == palabraCorrecta[i]);
        if(letra.toUpperCase() == palabraCorrecta[i])
        {
            nuevaPalabra += letra ;
        }
        else
        {
            nuevaPalabra += palabraOculta[i];
        }
    }
    console.log(nuevaPalabra);
    palabraOculta.innerText = nuevaPalabra;

}