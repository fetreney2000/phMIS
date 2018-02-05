const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController')
const srqController = require('../controllers/srqController');
const vasController = require('../controllers/vasController');
const spubController = require('../controllers/spubController');

module.exports = (app) => {
    app.get('/', homeController.home);

    app.get('/pusatmaklumat', userController.pusatMaklumat);

    app.get('/srq/baharu', srqController.rekodBaharu);
    app.get('/srq/cari', srqController.cariRekod);
    app.get('/srq/statistik', srqController.statistik);

    app.get('/vas/telefonambil', vasController.telefonAmbil);
    app.get('/vas/kadtemujanji', vasController.kadTemujanji);
    app.get('/vas/cepat', vasController.cepat);
    app.get('/vas/spub', vasController.spub);
    app.get('/vas/statistik', vasController.statistik);

    app.get('/spub/status', spubController.statusPesakit);
    app.get('/spub/kemaskini', spubController.kemaskiniMaklumat);
    app.get('/spub/statistik', spubController.statistik);

    app.get('*', homeController.none);
};