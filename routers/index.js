const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController')
const srqController = require('../controllers/srqController');
const vasController = require('../controllers/vasController');
const spubController = require('../controllers/spubController');
const galenikalController = require('../controllers/galenikalController');
const prabungkusController = require('../controllers/prabungkusController');
const pengurusanController = require('../controllers/pengurusanController');

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

    app.get('/galenikal/internal/extemporaneous', galenikalController.extemporaneous);
    app.get('/galenikal/internal/pukal', galenikalController.pukal);
    app.get('/galenikal/eksternal/losyen', galenikalController.losyen);
    app.get('/galenikal/eksternal/krim', galenikalController.krim);
    app.get('/galenikal/statistik', galenikalController.statistik);

    app.get('/prabungkus/rekod', prabungkusController.rekodPrabungkus);
    app.get('/prabungkus/statistik', prabungkusController.statistik);

    app.get('/pengurusan/kunci', pengurusanController.pengurusanKunci);
    app.get('/pengurusan/hebahan', pengurusanController.hebahanMaklumat);

    app.get('*', homeController.none);
};
