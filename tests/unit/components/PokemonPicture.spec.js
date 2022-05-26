import { shallowMount } from "@vue/test-utils"
import PokemonPicture from "@/components/PokemonPicture";

describe('Pokemon Picture Component', () => {

    
    test('Should match the snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon:false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()

    })    
    test('Should show hidden image and 100th pokemon', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon:false
            }
        }) 
        const [imgFalse, imgTrue] = wrapper.findAll('img');
        const {pokemonId, showPokemon} = wrapper.props()
        expect(imgFalse.exists()).toBeTruthy();
        expect(imgFalse.classes('hidden-pokemon')).toBeTruthy();
        expect(imgTrue).toBe(undefined);
        expect(pokemonId).toBe(100);
        expect(showPokemon).toBeFalsy()
    })
    test('100th pokemon should have its urlimg', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon:true
            }
        }) 
        
        console.log(props);
    })
    test('Should show pokemon if true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon:true
            }
        }) 
        const {pokemonId, showPokemon} = wrapper.props()
        const pokemonImg = wrapper.find('img')
        expect(showPokemon).toBeTruthy()
        expect(pokemonImg.classes('hidden-pokemon')).toBeTruthy();
    })
})