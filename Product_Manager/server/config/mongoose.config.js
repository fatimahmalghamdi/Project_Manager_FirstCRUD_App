const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/productmanager_db")
.then(() => console.log("successfully conneted to the db"))
.catch(err => console.log("faild to connect to the database"))