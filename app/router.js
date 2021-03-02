// const orm = require('./orm')
const db = require('./connection')('burger','rootroot')

function router(app) {

  app.get("/api/burgers", async (req, res) => {
    const data = await db.query("SELECT * FROM request");
    res.send(data);
  });

  app.post("/api/burgers", async (req, res) => {
    await db.query("INSERT INTO request (request) VALUES (?)", [
      req.body.request,
    ]);
    res.redirect("/");
  });

  app.delete("/api/burgers/:id", async (req, res) => {
    const id = req.params.id;
    await db.query(`UPDATE request SET eaten = '1' WHERE id = '${id}'`);
    res.send({ message: `munched ${id}` });
  });
}

module.exports = router