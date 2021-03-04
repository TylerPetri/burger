const orm = require('../config/orm')

function router(app) {

  app.get('/', async ( req,res ) => {
    const d = await orm.getPre()
    const data = await orm.getPost()
      res.render('index', { preMunch: d, postMunch: data });
  })

  app.post("/api/burgers", async (req, res) => {
    await orm.postRequest( req.body.request )
    console.log(req.body)
    res.redirect("/");
  });

  app.put("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await orm.munch( id )
    res.send({ message: "Note Updated!" });
  });
}

module.exports = router