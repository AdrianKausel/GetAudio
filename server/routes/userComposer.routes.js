const UserComposerController = require('../controllers/userComposer.controllers');

module.exports = app => {
    app.get('/api/usercomposer', UserComposerController.List);

    app.get('/api/usercomposer/:id', UserComposerController.newFind);

    app.post('/api/usercomposer/new', UserComposerController.newCreate);
    
    app.put('/api/usercomposer/update/:id', UserComposerController.newUpdate);
    
    app.delete('/api/usercomposer/delete/:id', UserComposerController.newDelete);
}