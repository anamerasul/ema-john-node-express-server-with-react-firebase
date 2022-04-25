import express from "express"
import cors from "cors"
import "dotenv/config"

import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

// const https = require('https');
// const http = require('http');

// const fs = require('fs');



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
        console.log("db connected to mono")

        // get product 

        app.get('/product', async (req, res) => {
            const query = req.body
            const page = parseInt(req.query.page)
            const size = parseInt(req.query.size)



            console.log(query)

            console.log(req.query)
            const cursor = productsCollection.find(query)

            let products;

            if (page || size) {
                products = await cursor.skip(page * size).limit(size).toArray()

            }

            else {
                products = await cursor.toArray()

            }


            res.send(products)


        })


        app.get('/product-count', async (req, res) => {
            // const query = {}
            // const cursor = productsCollection.find(query)

            const count = await productsCollection.estimatedDocumentCount()
            res.send({ count })

        })


        // use post product by id

        app.post('/productByKeys', async (req, res) => {
            const keys = req.body
            const ids = keys.map(id => ObjectId(id))
            const query = { _id: { $in: ids } }
            const cursor = productsCollection.find(query)

            const products = await cursor.toArray()
            console.log(keys)

            res.send(products)



        })



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


// const httpServer = http.createServer(app);
// const httpsServer = https.createServer({
// }, app);

// httpServer.listen(80, () => {
//     console.log('HTTP Server running on port 80');

//     const run = async () => {
//         try {
//             await client.connect();
//             const productsCollection = client.db("emajonsonNodeMongo").collection("products");
//             console.log("db connected to mongo")

//             // get product

//             app.get('/product', async (req, res) => {
//                 const query = req.body
//                 const cursor = productsCollection.find(query)

//                 const products = await cursor.toArray()
//                 res.send(products)


//             })



//         }


//         finally {
//             // await client.close();
//         }

//     }
//     run().catch(console.dir);

// });

// httpsServer.listen(443, () => {
//     console.log('HTTPS Server running on port 443');

//     const run = async () => {
//         try {
//             await client.connect();
//             const productsCollection = client.db("emajonsonNodeMongo").collection("products");
//             console.log("db connected to mongo")

//             // get product

//             app.get('/product', async (req, res) => {
//                 const query = req.body
//                 const cursor = productsCollection.find(query)

//                 const products = await cursor.toArray()
//                 res.send(products)


//             })



//         }


//         finally {
//             // await client.close();
//         }

//     }
//     run().catch(console.dir);
// });