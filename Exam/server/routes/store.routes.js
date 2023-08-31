const store = require('../controllers/store.controller');

module.exports = app => {
    app.post('/api/store', store.createstore);
    app.get('/api/store', store.retrieveAllstores);
    app.get('/api/store/:id', store.retrievestore);
    app.patch('/api/store/:id', store.updatestore);
    app.delete('/api/store/:id', store.deletestore);
};