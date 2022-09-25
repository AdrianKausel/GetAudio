const express = require('express');
const app = express()
const cors = require('cors');
const port = 8000  
const cookieParser = require('cookie-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(cookieParser());
app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use (cors())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/config/db.config')
require('./server/routes/userComposer.routes')(app)
require('./server/routes/userStandard.routes')(app)
require('./server/routes/mediaFiles.routes')(app)
require('./server/routes/newSample.routes')(app)

app.listen(port, () => console.log('Server UP'))