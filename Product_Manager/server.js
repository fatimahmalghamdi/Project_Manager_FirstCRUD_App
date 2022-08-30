
const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require("cors")
app.use(cors());

//product:
const productRoutesFunction = require("./server/routes/product.routes")
productRoutesFunction(app);


require("./server/config/mongoose.config")


app.listen(8000, () => console.log("Our application is running on port 8000"));

// line 11: let x= errors[fields]