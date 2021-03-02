const express = require('express')
const apiRouter = require('./app/router')
// const exphbs = require('express-handlebars')
const app = express()

const db = require('./app/connection')('burger','rootroot')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use( express.static('public') );

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars');

apiRouter(app)

app.listen( PORT , () =>
    console.log(`Server listening on ${PORT}`)
)