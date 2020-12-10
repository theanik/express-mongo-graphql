const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test-app', {useNewUrlParser: true, useUnifiedTopology: true});




let app = express();
app.use(bp.json());







const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, ()=> {
        console.log('Database connected')
        console.log(`Application run on ${PORT}`)
    });
});


