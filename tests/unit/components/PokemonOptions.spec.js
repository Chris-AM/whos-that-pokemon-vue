import PokemonOptions from "@/components/PokemonOptions"
import { shallowMount } from "@vue/test-utils"
import { pokemon } from "../mocks/pokemon.mock"



describe('Pokemon Options Component', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemon
            }
        });
    })

    test('Should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
} )