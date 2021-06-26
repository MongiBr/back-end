var mongoose = require ('mongoose')
//var mongoDB = 'mongodb://127.0.0.1/the name of the data base'
var mongoDB = 'mongodb://localhost/mydb';
mongoose.connect(mongoDB,{ useNewUrlParser: true,useUnifiedTopology: true } )
//laisser mongoose s'execute sans intereption
mongoose.Promise = global.Promise
var DB = mongoose.connection 
DB.on('error',console.error.bind(console,'MongoDB connection error:'))
