const express = require('express');
const cors = require('cors');
const port = 8000  
const cookieParser = require('cookie-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const morgan = require('morgan');
const audiofilesroutes = require('./server/routes/audiofiles.routes')

const app = express()

// MULTER
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file es el `avatar` del archivo
    // req.body tendrá los campos textuales, en caso de haber alguno.
  })
  
  app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    // req.files es el arreglo (array) de archivos `photos`
    // req.body tendrá los campos textuales, en caso de haber alguno.
  })
  
  const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
  app.post('/cool-profile', cpUpload, function (req, res, next) {
    // req.files es un objeto (String -> Array) donde el nombre del campo es la clave (key) y el valor es el arreglo (array) de archivos
    //
    // Ejemplo
    //  req.files['avatar'][0] -> Archivo
    //  req.files['gallery'] -> Array
    //
    // req.body tendrá los campos textuales, en caso de haber alguno.
  })
// MULTER END

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