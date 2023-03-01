const fs = require('fs');
const csv = require('csv-parser');
const mysql = require('mysql');


const test = (request, response) => {   
    
    response.status(200).json({success: true})
}


const importInDatabase = (request, response) => {
    
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'test_technique'

    });

    connection.connect((erreur) => {
        if (erreur) {
            console.error('Erreur de connexion :', erreur);
        } else {
            console.log('Connecté à la base de données MySQL.');
        }
    });
 
    fs.createReadStream('/Users/Administrateur/Desktop/technical_test_backend/Question2/file.csv')
    .pipe(csv())
    .on('data', (row) => {
        const sql = `INSERT INTO users (uuid, nom, email) VALUES (?, ?, ?)`;
        const values = [row.uuid, row.nom, row.email];

        connection.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log("Ligne insérée ");
        });
    })
    .on('end', () => {
        console.log('Importation terminée');
        connection.end();
    });
}
module.exports = {
    test,
    importInDatabase
}