var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Delicous' });
});

router.get('/Anmelden', function(req, res, next) {
  res.render('Anmelden', { title: 'Delicous' });
});

router.get('/Registrieren', function(req, res, next) {
  res.render('Registrieren', { title: 'Delicous' });
});

router.get('/Rezepte', function(req, res, next) {
  res.render('AlleRezepte', { title: 'Delicous' });
});

router.get('/Rezepte/:ID', function(req, res, next) {
  res.render('Rezept', { title: 'Delicous' });
});

router.get('/User/:ID/Rezepte', function(req, res, next) {
  res.render('MeineRezepte', { title: 'Delicous' });
});

router.get('/User/:ID/Zutaten', function(req, res, next) {
  res.render('MeineRezepte', { title: 'Delicous' });
});

module.exports = router;
