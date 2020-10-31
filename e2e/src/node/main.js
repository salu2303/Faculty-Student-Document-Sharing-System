var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/admin", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
    console.log("Connection done!");
    var Item = new mongoose.Schema({
        admin_name: String,
        admin_pswd: String,
        admin_branch: String,
    }, { collection: 'admin' });

    var Item = mongoose.model('admin', Item);
    app.get("/getadmin/", (req, res) => {
        console.log("Request come!");
        if (req.params.cate == "all") {
            Item.find(function(err, al) {
                if (err) {
                    res.status(400);
                    res.send("Unable to find admin");
                } else {
                    console.log("All done");
                    console.log(al);
                    res.send(al);
                }
            });
        } else {
            Item.find({ 'category': req.params.cate }, function(err, al) {
                if (err) {
                    res.status(400);
                    res.send("Unable to find admin");
                } else {
                    console.log("All done");
                    console.log(al);
                    res.send(al);
                }
            });
        }
    });
    
}
app.listen(8000, () => console.log("Server running on port 8000"));