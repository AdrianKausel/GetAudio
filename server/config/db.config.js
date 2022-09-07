const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/get_Audio', {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => console.log('Connected to Database'))
    .catch(error =>console.error('Error connecting to Database', error));