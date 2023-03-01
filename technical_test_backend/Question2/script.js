const { faker } = require('@faker-js/faker');
fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const nom_fichier = '/Users/Administrateur/Desktop/technical_test_backend/Question2/file.csv';

const stream = fs.createWriteStream(nom_fichier);

const entete = 'uuid,nom,email\n';
stream.write(entete);

const nb_lignes = 1000000;

for (let i=0; i<nb_lignes;i++){

    const uuid = uuidv4();
    const name = faker.name.fullName();
    const email = faker.internet.email();

    const row = `${uuid},${name},${email}\n`;

    stream.write(row);

}
console.log("Création d'un csv de ", nb_lignes, " lignes !")
stream.end();



