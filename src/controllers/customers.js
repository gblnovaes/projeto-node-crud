const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

async function add(req, res) {
    const { name, age, email, password } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })


    register.save(register)

    res.send("Cadastrado com sucesso.!!")
}

module.exports = {
    add
}