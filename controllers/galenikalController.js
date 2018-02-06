exports.extemporaneous = (req, res) => {
    res.render('user/galenikal/internal/extemporaneous');
};

exports.pukal = (req, res) => {
    res.render('user/galenikal/internal/pukal');
};

exports.losyen = (req, res) => {
    res.render('user/galenikal/eksternal/losyen');
};

exports.krim = (req, res) => {
    res.render('user/galenikal/eksternal/krim');
};

exports.statistik = (req, res) => {
    res.render('user/galenikal/statistik');
};
