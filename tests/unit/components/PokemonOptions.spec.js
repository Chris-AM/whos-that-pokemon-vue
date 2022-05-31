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
    test('should show all 4 options correctly', () => {
        const liTags = wrapper.findAll('li');
        const [firstPkmn, secondPkmn, thirdPkmn, fourthPkmn] = wrapper.findAll('li');
        expect(liTags.length).toBe(4)
        expect(firstPkmn.text()).toBe('bulbasaur')
        expect(secondPkmn.text()).toBe('ivysaur')
        expect(thirdPkmn.text()).toBe('venusaur')
        expect(fourthPkmn.text()).toBe('charmander')
    })
    test('should emmit "selection" with their respective params on click', () => {
        const [firstPkmn, secondPkmn, thirdPkmn, fourthPkmn] = wrapper.findAll('li');
        firstPkmn.trigger('click')
        secondPkmn.trigger('click')
        thirdPkmn.trigger('click')
        fourthPkmn.trigger('click')
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])
    })
})