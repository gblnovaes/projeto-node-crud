const express = require('express')

const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo 1'
    })
})


//page not found 404
app.use((req, res) => {
    res.send("Page Not Found")
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})