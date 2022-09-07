const router = require('express').Router()
const CustomerController = require('../controllers/customers')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo 1'
    })
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de  Cliente'
    })
});

router.post('/register/add', CustomerController.add);



module.exports = router