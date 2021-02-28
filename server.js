const express = require('express')
const exphbs = require('express-handlebars')

const db = require('./connection/connection')('burger','rootroot')

const app = express()
const PORT = process.env.port || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');



















app.listen( PORT , () =>
    console.log(`Server listening on ${PORT}`)
)