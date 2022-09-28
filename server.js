const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const port = 8000  
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const audiofilesroutes = require('./server/routes/audiofiles.routes')
global.__folder = __dirname

const app = express()

app.use(fileUpload())


app.use(morgan('dev'));
app.use(cookieParser());
app.use (express.json());
app.use (express.urlencoded({extended:true}));
app.use (cors())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(audiofilesroutes);

require('./server/config/db.config')
require('./server/routes/userComposer.routes')(app)
require('./server/routes/userStandard.routes')(app)
require('./server/routes/mediaFiles.routes')(app)
require('./server/routes/newSample.routes')(app)
require('./server/routes/audioUpload.routes')(app)

app.listen(port, () => console.log('Server UP'))