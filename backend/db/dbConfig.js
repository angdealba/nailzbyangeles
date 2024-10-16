const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aid2121:nailzbyangeles@cluster0.vnxtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );

    } finally {
        await client.close();
    }
}


module.exports = connectDB