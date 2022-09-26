
const audioFilesController= require('../controllers/audiofiles.controllers');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/newSamples/new', audioFilesController.uploadAudioFile);

    /* app.get('/api/mediafiles/:id', MediaFilesController.newFind);

    app.post('/api/mediafiles/new', MediaFilesController.newCreate);

    app.post('/api/media/new', upload.single('media'), function (req, res, next) {
        console.log(req.files.media)
        let data = fs.createReadStream(req.files.media,'utf8');
        console.log(data)

    })

    app.delete('/api/mediafiles/delete/:id', MediaFilesController.newDelete); */
}