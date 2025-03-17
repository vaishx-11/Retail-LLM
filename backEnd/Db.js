const mongoose = require('mongoose');


// const mongoURI = "mongodb://localhost:27017"
// mongodb://localhost:27017
// mongodb://localhost:27017/
const mongoURI ="mongodb+srv://hellomintu3:4oqqbxjh8mIb8nh5@cluster0.8rnhjyh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


    function connectToMongo() {
        mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
    }

    module.exports = connectToMongo;
// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{

//         console.log("connected to mongo Successfully");
//     })
// }

// module.exports=connectToMongo


// ------------
