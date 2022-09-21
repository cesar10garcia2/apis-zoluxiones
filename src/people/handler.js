
const connection = require('../../db/connection')
const queryString = require('querystring')


module.exports.findAllPeople = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;
    const sql = 'SELECT * FROM t_people';
    connection.query(sql, (error, rows) =>{
        if (error) {
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        }else{
            callback(null,{
                statusCode: 200,
                body: JSON.stringify({
                    people:rows
                })
            })
        }
    })

};

module.exports.createPeople =  (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const body = queryString.parse(event['body']);
    const data = {
        birth_year: body.birth_year,
        eye_color: body.eye_color,
        films: body.films,
        gender: body.gender,
        hair_color: body.hair_color,
        height: body.height,
        homeworld: body.homeworld,
        name: body.name,
        skin_color: body.skin_color,
        species: body.species,
        starships: body.starships,
        url: body.url,
        vehicles: body.vehicles,
    }
    const sql = 'INSERT INTO t_people SET ?';
    connection.query(sql, [data], (error, rows) =>{
        if (error) {
            callback({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        }else{
            callback(null,{
                statusCode: 200,
                body: JSON.stringify({
                    res:"Registrado correctamente"
                })
            })
        }
    })
};