import express from "express"
import cors from "cors"
import "dotenv/config"

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';



// config

const app = express()

const port = process.env.PORT || 5000


// middleWare

app.use(cors())

app.use(express.json())



// mongodb connection

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lvjq0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     // const collection = client.db("test").collection("devices");
//     const productsCollection = client.db("emajonsonNodeMongo").collection("products");
//     console.log("db connected")
//     // perform actions on the collection object
//     // client.close();
// });


const run = async () => {
    try {
        await client.connect();
        const productsCollection = client.db("emajonsonNodeMongo").collection("products");
        console.log("db connected to mongo")





    }


    finally {
        // await client.close();
    }

}
run().catch(console.dir);





// server config

app.get("/", (req, res) => {
    res.send(` running my emajonson server`)

});


app.listen(port, () => {
    console.log("Listening to port", port)
})
