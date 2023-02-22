const router = require('express').Router();

const authController = require('./controllers/authController');
const photoController = require('./controllers/photoController');

router.use('/', authController);
router.get('/create-post', photoController.getPhoto)
router.post('/create-post', photoController.postPhoto)
router.post('/like', photoController.updatePhotoLikes);

module.exports = router