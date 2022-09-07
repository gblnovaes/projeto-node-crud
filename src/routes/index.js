const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo 1'
    })
});

module.exports = router