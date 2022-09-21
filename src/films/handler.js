'use strict';

const axios = require('axios');
const { ENV_ALL_FILM, ENV_GET_FILM } = require('./env.js');
const { parseModel } = require("./model.js");

const getUrl = (id) => {
    return id ? ENV_GET_FILM(id) : ENV_ALL_FILM;
}

module.exports.filmModel = async (event) => {

    const { id } = event.pathParameters ? event.pathParameters : { id: '' };
    const API = getUrl(id);
    const params = {
        "params": { "format": "json" }
    }
    try {
        let data;
        const response = await axios.get(API, params);

        if (id) {
            data = parseModel(response.data);
        } else {
            response.data.results = response.data.results.map(
                item => (parseModel(item))
            );
            data = response.data;
        }

        return {
            'statusCode': 200,
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(data)
        };

    } catch (error) {
        return {
            'statusCode': error.response.status,
            'body': JSON.stringify(error.response.statusText)
        };
    }
};
