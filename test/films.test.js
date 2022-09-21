const { parseModel } = require("../src/films/model");
const request = require('supertest');

describe('Test parse Film', ()=>{
    test('Translate model', () => {
        let en = {
            title: 'Film title',
            director: 'Film director'
        };
        let es = {
            titulo: 'Film title',
            director: 'Film director'
        };
        console.log(parseModel(en));
        expect(
            JSON.stringify(es)
        ).toBe(
            JSON.stringify(parseModel(en))
        );
    });

})