require('dotenv').config()
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');
mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_USER}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true});




let app = express();
app.use(bp.json());
app.use('/api', router);






const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, ()=> {
        console.log('Database connected')
        console.log(`Application run on ${PORT}`)
    });
});


