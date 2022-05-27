import getPokemonOptions, { getPokemon, getPokemonNames } from "@/helpers/getPokemonOptions";
import { pokemon } from "../mocks/pokemon.mock";
describe('get Pokemon Options helper', () => {

    const allPokemon = getPokemon();


    test('Should create an array with the quantity of pokemon (649)', () => {
        expect(allPokemon.length).toBe(649);
    })
    test('position 0 should be first pokemon', () => {
        expect(allPokemon[0]).toBe(1);
    })
    test('should return an array of 4 elements with pokemon names', async () => {
        const pokemonNames = await getPokemonNames([1, 2, 3, 4]);
        expect(pokemonNames).toStrictEqual(pokemon)
    })
    test('getPokemonOptions method should return a mixed array', async () => {
        const pokemonOptions = await getPokemonOptions();
        expect(pokemonOptions.length).toBe(4)
        expect(pokemonOptions).toEqual([
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            { id: expect.any(Number), name: expect.any(String) },
            
        ])
    })
})