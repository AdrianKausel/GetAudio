const express = require('express');
const app = express()
const cors = require('cors');
const port = 8000  
app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use (cors())

require('./server/config/db.config')
require('./server/routes/userComposer.routes')(app)

app.listen(port, () => console.log('Server UP'))