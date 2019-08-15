// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// const bodyParser =require("body-parser");

// const router = require("./router");

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// app.use("/", router);


// app.listen(port, () => {
  
//     console.log(`server running on port ${port}`);
// })

const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

const bodyParser =require("body-parser");

const router = require("./router");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", router); 

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
