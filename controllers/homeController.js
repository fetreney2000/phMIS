exports.home = (req, res) => {
    res.render('home', {
        title: 'UFHTNM MIS'
    });
};

exports.none = (req, res) => {
    res.send('Harap maaf. Laman yang anda ingini tiada dalam simpanan kami.');
};