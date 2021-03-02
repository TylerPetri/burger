const express = require('express')
// const exphbs = require('express-handlebars')

const db = require('./connection/connection')('burger','rootroot')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use( express.static('html') );

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars');


app.get('/api/burgers', async (req,res) =>{
    const data = await db.query('SELECT * FROM request')
    res.send(data)
})

app.post('/api/burgers', async (req,res) => {
    await db.query('INSERT INTO request (request) VALUES (?)', [req.body.request])
    res.redirect('/')
})

app.delete('/api/burgers/:id', async ( req,res ) => {
    const id = req.params.id
    await db.query(`UPDATE request SET eaten = '1' WHERE id = '${id}'`)
    res.send({message: `munched ${id}`})
})

app.listen( PORT , () =>
    console.log(`Server listening on ${PORT}`)
)