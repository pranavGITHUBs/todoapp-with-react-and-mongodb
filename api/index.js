 var Express = require("express");
 var Mongoclient=require("mongodb").MongoClient;
 var cors=require("cors");
 const multer=require("multer");

 var app=Express();
 app.use(cors()); var CONNECTION_STRING="mongodb+srv://<username>:Pranav@2002@cluster0.xpqe5n0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

 "

 ";
















var DATABASENAME="Todoapp";
var database;

app.listen(5038,()=>{
    Mongoclient.connect (CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");

    });
})

app.get('/api/Todoapp/GetNotes',(request,response)=>{
    database.collection("Todoappcollection").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

app.post('/api/Todoapp/AddNotes',multer().none(),(request,response)=>{
    database.collection("Todoappcollection").count({},function(error,numOfDocs){
        database.collection("Todoappcollection").insertOne({
            id:(numOfDocs=1).toString(),
            description:request.body.newNotes
        });
        response.json("added Successfully");
    })
})

app.delete('/api/Todoapp/DeleteNotes',(request,response)=>{
    database.collection("Todoappcollection").deleteOne({
        id:request.query.id
    });
    response.json("deleted successfully");
})













