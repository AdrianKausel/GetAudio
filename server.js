const express = require('express');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const port = 8000  
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const audiofilesroutes = require('./server/routes/audiofiles.routes')

const app = express()

app.use(fileUpload())
//Upload Endpoint

app.post('/upload', (req, res) => {
  if(req.files ===null) {
    return res.status(400).json({msg: 'No File uploaded'});
  }
  
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err){
      console.error(err);
      returnres.status(500).send(err);

    }
    
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    console.log(file.name)

  })
})

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

app.listen(port, () => console.log('Server UP'))