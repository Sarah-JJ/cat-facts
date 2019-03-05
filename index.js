const express = require('express');
const index = express();
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const cors = require('cors');


index.use(cors());





let port = process.env.PORT || 3000;


mongoose.connect('mongodb://admin22:admin22@ds149754.mlab.com:49754/cat-facts',{useNewUrlParser: true}, (err) => {
    if(err)
        console.log(err);
    else console.log('connected to db...');

});

console.log("started ... ")


index.get('/', (req, res) => {
    FactModel.find({}, function (err, all) {
        if (err) {
            res.json({"err": err});
        } else {
            res.json({all});
        }
    })
});

index.post('/', (req, res) =>{

});


const factSchema = mongoose.Schema({
    text: String,
    type: String,
    user: {
        "_id": ObjectId,
        "name": {
            "first": String,
            "last": String
        }
    },
    "upvotes": Number,
    "userUpvoted": Boolean
});

let FactModel = mongoose.model('All', factSchema, "all");


index.listen(port);