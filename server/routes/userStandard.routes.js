const UserStandardController = require("../controllers/userStandard.controllers");
const { authenticate }  = require("../config/jwt.config");

module.exports = (app) => {
    app.get('/api/userstandard', UserStandardController.List);

    app.get('/api/userstandard/:id', UserStandardController.newFind);

    app.post('/api/userstandard/new', UserStandardController.newCreate);

    app.post('/api/userstandard/login',UserStandardController.login);
    
    app.put('/api/userstandard/update/:id',  UserStandardController.newUpdate);
    
    app.delete('/api/userstandard/delete/:id', UserStandardController.newDelete);
}