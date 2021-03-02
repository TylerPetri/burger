// const db = require( './connection' )(process.env.DB_NAME,process.env.DB_PWD)
const db = require( './connection' )('burger','rootroot')

function getList(){
    return db.query("SELECT * FROM request")
}

function postRequest(req){
    return db.query("INSERT INTO request (request) VALUES (?)", [req]);
}

function munch(id){
    return db.query(`UPDATE request SET eaten = '1' WHERE id = '${id}'`);
}

module.exports = {getList, postRequest, munch}