<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il tuo profilo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <img src="img/Logo.png" alt="Logo" class="logo">
    </header>
    
<div class="title">
    <h1>Il tuo profilo</h1>
</div>
    <?php
$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "DATABASE"; 

// Creazione connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controllo connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

include 'db_conn.php';  // Include la connessione al database

// Query per selezionare dati da più tabelle usando le chiavi esterne
$sql = "SELECT utenti.infoUtenti, infoUtenti.ID, infoUtenti.NomeCognome, 
               login.Email, login.ID, login.NomeCognome, login.Password,
               acquisti.dataAcquisto, acquisti.nomeAuto, acquisti.ID
        FROM utenti
        LEFT JOIN LOGIN ON utenti.ID = login.ID
        LEFT JOIN acquisti ON utenti.ID = acquisti.ID";

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Lista Utenti e Acquisti</title>
</head>
<body>
    <h1>Lista Utenti e Acquisti</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nome e cognome</th>
            <th>Email</th>
            <th>Data Acquisto</th>
            <th>Modello Auto</th>
        </tr>

        <?php
        if ($result->num_rows > 0) {
            // Output dei dati di ogni riga
            while($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>{$row['ID']}</td>
                        <td>{$row['NomeCognome']}</td>
                        <td>{$row['Email']}</td>
                        <td>{$row['dataAcquisto']}</td>
                        <td>{$row['modelloAuto']}</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='6'>Nessun risultato</td></tr>";
        }
        $conn->close();
        ?>
    </table>
</body>
</html>

