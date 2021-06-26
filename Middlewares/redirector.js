module.exports = function (req, res, next) {
    let anonym_urls = [
        '/',
        '/login',
        '/resetMdp',
    ];

    let url = req._parsedOriginalUrl;

    /**
     * authenticated
     */
    if(req.session.email) {
        if(anonym_urls.includes(url.pathname)) {
            res.redirect('/accueil');
            return;
        }
    }

    /**
     * anonymous
     */
    else {
        if(! anonym_urls.includes(url.pathname)) {
            res.redirect('/login');
            return;
        }
    }

    next();
}