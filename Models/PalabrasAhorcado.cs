namespace TP3.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;

    public PalabrasAhorcado()
    {
        this.palabras= new List <string>() {"RINOCERONTE","LIBERTADORES","SUDAMERICANA","CONFERENCIA","COMPUTADORA","PROCESADOR","PANTALON","PIZARRON","ANTEOJOS","VENTILADOR"};
    }
    public string ObtenerPalabra()
    {
        Random rd = new Random();
        string palabraEnJuego = palabras[rd.Next(0, palabras.Count)];
        return palabraEnJuego;
    }

}
