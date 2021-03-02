const orm = require('./orm')

function router(app) {

  app.get("/api/burgers", async (req, res) => {
    const data = await orm.getList()
    res.send(data);
  });

  app.post("/api/burgers", async (req, res) => {
    await orm.postRequest( req.body.request )
    res.redirect("/");
  });

  app.delete("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await orm.munch( id )
    res.send({ message: `munched ${id}` });
  });
}

module.exports = router