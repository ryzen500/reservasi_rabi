const express =require("express");

const cors =require("cors");

const { allRouter } = require("./app/routes");



const app = express();


const db = require("./app/models/");

db.mongoose
  .connect(db.url, {  }).then(()=> {
    // result 
    console.log("Database sudah Terhubung ");
  }).catch((err)=> {
    console.error("Tidak Dapat Terhubung di Database Dikarenakan  ", err);
    
    process.exit;
  });


const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204
}
;

// apply global middleware
app.use(cors());
app.use(express.json());

app.use('/api',allRouter);

// app.get("/", (req, res)=> {

//     res.json({message :"Hello"});
// });

const  PORT = process.env.PORT || 12345 ;

app.listen(PORT, ()=> {

    console.log(` Server Started ON  PORT ${PORT} `);
});
