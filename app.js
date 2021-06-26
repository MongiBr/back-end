
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const session = require('express-session');
const url = 'mongodb://localhost/mydb';
const cookie = require('cookie-parser')
const bodyParser = require('body-parser');



const app = express();
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));
//on se connecte a mongoose avec cet url , =true pour forcer la connexion a ce new url si non il prend l'ancienne url de mongoose
//conn instantiation de la connexion a la base de donnee 
//.on est comme eventlistener , s'il ya envoi de donnee on execute la fct function()..

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const conn = mongoose.connection
conn.on('open', function () {
    console.log('connected...');
});
// Session 
// app.use(express.bodyParser({ limit: '100mb' }))
// app.use(fileUpload());
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));






var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(express.json());
const userRouter = require('./Routers/userRouter');
app.use('/user', userRouter);


const adminRouter = require('./Routers/adminRouter');
app.use('/admin', adminRouter);

const expertRouter = require('./Routers/expertRouter');
app.use('/expert', expertRouter);

const annonceRouter = require('./Routers/annonceRouter');
app.use('/annonce', annonceRouter);

const commentaireRouter = require('./Routers/commentaireRouter');
app.use('/commentaire', commentaireRouter);

const reclamation = require('./Routers/reclamationRouter');
app.use('/reclamation', reclamation);

const notificationRouter = require('./Routers/notificationRouter');
app.use('/notification', notificationRouter);

const adresse = require('./Routers/adresseRouter');
app.use('/adresse', adresse);


const tags = require('./Routers/tagsRouter');
app.use('/tags', tags);

const formO = require('./Routers/formulaireOrdonnanceRouter');
app.use('/formulaireOrdonnance', formO);

const cat = require('./Routers/categorieRouter');
app.use('/categorie', cat);

const medicament = require('./Routers/medicamentRouter');
app.use('/medicament', medicament);

const produit = require('./Routers/produitRouter');
app.use('/produit', produit);

const fav = require('./Routers/favorisRouter');
app.use('/favoris', fav);

app.use(cookie());

const nonMedicament = require('./Routers/nonMedicamentRouter');
app.use('/nonMedicament', nonMedicament);

// connecter au port 9000
app.listen(4000, () => {
    console.log('Server started');
});

//faut faire model de mode : offre volontaire , prix symbolique