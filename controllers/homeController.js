var title = 'Unit Farmasi Hospital Tenom'

exports.home = (req, res) => {
    res.render('home', {
        title: title
    });
};

exports.none = (req, res) => {
    res.send('Harap maaf. Laman yang anda ingini tiada dalam simpanan kami.');
};