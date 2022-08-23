const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middlewaresGlobal');
// const fs = require('fs');
// const multer = require('multer');
// const tesseract = require("node-tesseract-ocr")

// STORAGE 
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./uploads")
//     },
//     filename: (req, file, cb) =>{
//         cb(null, file.originalname);
//     }
    
// });

// const upload = multer({storage: storage}).single("avatar");

// app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, 'public', 'assets')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set("view engine", "ejs");


// ROUTES
// app.get('/', (req, res) => {
//     res.render('index', {data:''});
// })



// app.post('/upload', (req, res ) => {
//     upload(req, res, err => {
//        fs.readFile(`./uploads/${req.file.originalname}`, (err, data) =>{
//         if(err) return console.log('This is your error', err);
  

// const config = {
//     lang: "eng+fr+frm+chi_sim+spa",
//     oem: 3,
//     psm: 1,
//   }

// tesseract
//   .recognize(data, config)
//   .then((text) => {
//     console.log("Result:", text)
//     res.render('index', {data:text});
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })

//     });

//     });

// });


// USE MIDDLEWARES
app.use(middlewareGlobal);
// USE ROUTERS
app.use(router);

// STart up our server
app.listen(5555, () => {
  console.log('Listen Port')
  console.log('access the port http://localhost:5555');
})


// const PORT = 5000 || process.env.PORT;
// app.listen(PORT, () => {
//     console.log('http://localhost:5000');
// })



