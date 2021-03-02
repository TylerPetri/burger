const orm = require('./orm')

function router(app) {


  app.get('/', async ( req,res ) => {
    const d = await orm.getPre()
    const data = await orm.getPost()
      res.render('index', { preMunch: d, postMunch: data });
  })

  app.post("/api/burgers", async (req, res) => {
    await orm.postRequest( req.body.request )
    res.redirect("/");
  });

  app.delete("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await orm.munch( id )
    res.end()
  });
}

module.exports = router