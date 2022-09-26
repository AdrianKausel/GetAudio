const { Router  } = require('express');
const router = Router();
const { getAudioFile, uploadAudioFile } = require('../controllers/audiofiles.controllers')

router.get('/audiofiles/:id', getAudioFile)

router.post('/audiofiles', uploadAudioFile)

module.exports = router;