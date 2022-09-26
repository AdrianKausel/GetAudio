const { MongoClient } = require('mongodb');

let db;

MongoClient.connect('mongodb://localhost/audiofilesdb', {
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.log(err);
        process.exit(0);
    }
    db = client.db('audiofilesdb')
    
});

// Debido a que las petciones son asíncronas, se
// usa lo siguiente:
const getConnection = () => db;

module.exports = {
    getConnection
}