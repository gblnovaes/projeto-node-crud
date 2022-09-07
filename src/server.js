const express = require('express')
const path = require('path')
const db = require('./database')
const routes = require('./routes')

const app = express()

db.connect()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))


app.use('/', routes)



//page not found 404
app.use((req, res) => {
    res.send("Page Not Found")
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running in port ${port}.`)
})