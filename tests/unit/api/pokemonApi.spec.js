import pokemonApi from "@/api/pokemonApi";

describe('pokemonApi', ()=> {
    test('axios should be configured correctly', ()=> {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});