const { DB_USER, DB_PASSWORD } = process.env;
const mongoose = require('mongoose');
const urlMongo = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`



const connect = async (id) => {
    const idUser = id;
    const ObjectId = mongoose.Types.ObjectId;
    const idObj = new ObjectId(idUser)
    try {
        await mongoose.connect(urlMongo);
        const products = await mongoose.connection.db.collection('products').find({ enStock: true }).toArray();
        const clients = await mongoose.connection.db.collection('clients').find( { _id: idObj } ).toArray();
        const data = {
            products,
            clients
        }
        return data;
    } catch(error) {
        console.log("Error de conexión ....", error);
    }
}

//connect();

module.exports = {
    connect,
}


