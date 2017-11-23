var express = require('express');
const controller = require('../controllers');
var router = express.Router();
var array=[1,2,3];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express curso JS' });
});


router.get('/test', controller.tvController.getArray);
router.get('/test2', controller.controllers2.getArray);
router.get('/test/:id', controller.tvController.getById);
router.post('/test', controller.tvController.postArray);
router.post('/test2', controller.tvController.postArray);
router.delete('/test/:id', controller.tvController.deleteTVShow);
router.put('/test/:id', controller.tvController.updateTVShow);

/*
router.get('/test/:id', function(req, res, next) {
  res.send({ title: 'Express curso JS' +req.params.id});
});
*/





module.exports = router;
