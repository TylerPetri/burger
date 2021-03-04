// const db = require( './connection' )(process.env.DB_NAME,process.env.DB_PWD)
const db = require( './connection' )('burgers_db','rootroot')

function getPre(){
    return db.query("SELECT * FROM burgers WHERE devoured is null")
}

function getPost(){
    return db.query("SELECT * FROM burgers WHERE devoured > 0")
}

function postRequest(request){
    return db.query("INSERT INTO burgers (burger_name) VALUES (?)", [request]);
}

function munch(id){
    return db.query(`UPDATE burgers SET devoured = '1' WHERE id = '${id}'`);
}

module.exports = {getPre, getPost, postRequest, munch}