using Microsoft.Data.SqlClient;
using Dapper;
namespace TP3.Models;

public class BD 
{ 
    private string connectionString = @"Server=localHost; dataBase = Ahorcado; Integrated Security = true; TrustServerCertificate = true";
    
    public List<string> LevantarPalabra()
    {

        List<string> palabras = new List<string>();
        using(SqlConnection connection = new SqlConnection(connectionString))
        {
            string query = "SELECT palabra FROM Palabras";
            palabras = connection.Query<string>(query).ToList();
        }
        return palabras;
    }
    
}