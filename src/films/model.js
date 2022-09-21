
const name_keys = {
    "title": "titulo",
    "episode_id": "identificador_episodio",
    "opening_crawl": "texto_apertura",
    "director": "director",
    "producer": "productor",
    "release_date": "fecha_estreno",
    "species": "especies",
    "starships": "naves_estelares",
    "vehicles": "vehiculos",
    "characters": "caracteres",
    "planets": "planetas",
    "url": "enlace",
    "created": "fecha_creacion",
    "edited": "fecha_edicion"

}


const parseModel = (film) => {
    let value_ini = {};

    return Object.keys(film).reduce(
        function (obj, field)  {

            const parse_field = name_keys[field];
            obj[parse_field] = film[field];
            return obj;
        },value_ini
    );
};

exports.parseModel = parseModel;