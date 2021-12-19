const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerDescription } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.14uaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// function
async function run() {
  try {
    await client.connect();
    const database = client.db("Crud_operation");
    const postCollections = database.collection("PostOperation");

    // app.get for all the document
    app.get("/services", async (req, res) => {
      const cursor = postCollections.find({});
      const result = await cursor.toArray();
      res.json(result);
    });

    // app.get for single service
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await postCollections.findOne(query);
      res.send(result);
    });
    // app.delete for single service
    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const cursor = await postCollections.deleteOne(query);
      res.json(cursor);
    });
    // app.get for update single id
    app.get("/update/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await postCollections.findOne(query);
      res.json(result);
    });

    //APP UPDATE
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updatedService = req.body;
      const filter = { _id: ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          name: updatedService.name,
          description: updatedService.description,
          img: updatedService.img,
        },
      };
      const result = await postCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("gotten the updated id", result);
      res.json(result);
    });
    // app.post
    app.post("/services", async (req, res) => {
      const service = req.body;
      const result = await postCollections.insertOne(service);
      res.send(result);
      console.log("post hitted", result);
    });
  } finally {
    // await client.close()
  }
}
run().catch(console.dir);

// function

app.get("/", (req, res) => {
  res.send("Hello from crud operation");
});
app.listen(port, () => {
  console.log("running crud operation server", port);
});
