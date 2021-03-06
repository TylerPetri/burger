require( 'dotenv' ).config()
const express = require('express')
const apiRouter = require('./models/burger.js')
const exphbs = require('express-handlebars')

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use( express.static('public') );

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

apiRouter(app)

app.listen( PORT , () =>
    console.log(`Server listening on ${PORT}`)
)