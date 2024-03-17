const express = require("express")
const app = express();
const PORT = process.env.PORT || 8000;
const { MongoClient } = require('mongodb');

// app.get('/', (req, res) => res.send("Hello, World"));

// app.use(express.json({ extended: false }));

// Handler for fetching an individual article by name
app.get("/api/articles/:name", async (req, res) => {
    let client;
    try {
        const articleName = req.params.name;
        client = await MongoClient.connect("mongodb://0.0.0.0:27017/");
        const db = client.db("mernblog");
        const articleInfo = await db.collection("articles").findOne({title: articleName});
        if (!articleInfo) {
            res.status(404).json({message: "Article not found"});
            return;
        }
        res.status(200).json(articleInfo);
    } catch (error) {
        console.error("Error connecting to database:", error);
        res.status(500).json({message: "Error connecting to database"});
    } finally {
        if (client) {
            client.close();
        }
    }
});

// Handler for fetching all articles
app.get("/api/articles", async (req, res) => {
    let client;
    try {
        const articleName = req.params.name;
        client = await MongoClient.connect("mongodb://0.0.0.0:27017/");
        const db = client.db("mernblog");
        const articleInfo = await db.collection("articles").find({}).toArray();
        if (!articleInfo) {
            res.status(404).json({message: "Article not found"});
            return;
        }
        res.status(200).json(articleInfo);
    } catch (error) {
        console.error("Error connecting to database:", error);
        res.status(500).json({message: "Error connecting to database"});
    } finally {
        if (client) {
            client.close();
        }
    }
});


app.listen(PORT, () => console.log(`Server started at Port ${PORT}`));