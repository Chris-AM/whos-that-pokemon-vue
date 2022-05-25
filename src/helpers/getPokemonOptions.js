import pokemonApi from "@/api/pokemonApi";

const getPokemon = () => {
    const pokemonArr = Array.from(Array(649));
    // console.log('pokemon array ===> ', pokemonArr);
    return pokemonArr.map((_, index) => index + 1);
}

const getPokemonNames = async( [a,b,c,d] = [] ) => {
    // const resp = await pokemonApi.get(`/1`)
    // console.log('resp ===> ', resp.data.id, resp.data.name)
    const pokemonPromisesArr = [
        pokemonApi.get(`${a}`),
        pokemonApi.get(`${b}`),
        pokemonApi.get(`${c}`),
        pokemonApi.get(`${d}`),
    ]
    const [ pkmn1, pkmn2, pkmn3, pkmn4 ] = await Promise.all(pokemonPromisesArr)

    return [
        {
            id: pkmn1.data.id,
            name: pkmn1.data.name
        },{
            id: pkmn2.data.id,
            name: pkmn2.data.name
        },{
            id: pkmn3.data.id,
            name: pkmn3.data.name
        },{
            id: pkmn4.data.id,
            name: pkmn4.data.name
        }
    ]
}

const getPokemonOptions = async () => {
    const mixedPokemon = getPokemon().sort( ()=> Math.random() - 0.5 );
    const pokemon = await getPokemonNames( mixedPokemon.splice(0, 4) );
    return pokemon
}


export default getPokemonOptions