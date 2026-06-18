namespace TP3.Models;

public class PalabrasAhorcado
{
    private List<string> palabras;
    public BD BaseDatos;
    public PalabrasAhorcado()
    {
        this.BaseDatos = new BD();
        this.palabras = new List<string>();
        this.palabras = BaseDatos.LevantarPalabra();
    }
    public string ObtenerPalabra()
    {
        Random rd = new Random();
        string palabraEnJuego = palabras[rd.Next(0, palabras.Count)];
        return palabraEnJuego;
    }
    public void InsertarPalabra(string palabraNueva)
    {
        BD MiBase = new BD();
        MiBase.AgregarPalabra(palabraNueva.ToUpper());
    }

}
