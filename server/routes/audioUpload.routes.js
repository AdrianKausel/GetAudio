const AudioUploaderController = require('../controllers/audioUpload.controllers');
const { authenticate }  = require("../config/jwt.config");

module.exports = (app) => {
    app.post('/api/audioUpload/new', AudioUploaderController.uploadOne);

    app.get('/api/audioUpload', AudioUploaderController.List);

    //app.get('/api/audioUpload/:id', AudioUploaderController.newFind);

}
