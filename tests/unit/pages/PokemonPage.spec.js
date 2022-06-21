import { shallowMount, mount } from '@vue/test-utils'

import PokemonPage from '@/pages/PokemonPage.vue'
import { pokemon } from '../mocks/pokemon.mock';

describe('PokemonPage Component', () => {
	let wrapper;
	let wrapperCheckAnswer;
	beforeEach(() => {
		wrapper = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemon,
					pokemon: pokemon[0],
					showPokemon: true,
					showAnswer: true,
					message: 'message'
				}
			}
		});
		wrapperCheckAnswer = shallowMount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemon,
					pokemon: pokemon[0],
					showPokemon: false,
					showAnswer: true,
					message: 'message'
				}
			}
		})
		
	});

	test('should call mixPokemonArr method when mount', () => {
		const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
		shallowMount(PokemonPage)
		expect(mixPokemonArrSpy).toHaveBeenCalled();

	})

	test('should matach snapshot after find a pokemon', () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonArr: pokemon,
					pokemon: pokemon[0],
					showPokemon: false,
					showAnswer: false,
					message: 'message'
				}
			}
		})
		expect(wrapper.html()).toMatchSnapshot()
	})
	test('PokemonPicture should exisits', () => {
		const pokemonPicture = wrapper.find('pokemon-picture-stub')
		expect(pokemonPicture.exists()).toBe(true)
	})
	test('PokemonOptions should exisits', () => {
		const pokemonOptions = wrapper.find('pokemon-options-stub')
		expect(pokemonOptions.exists()).toBeTruthy()
	})
	test('PokemonPicture attribute pokemonid === 1', () => {
		const pokemonPicture = wrapper.find('pokemon-picture-stub')
		const pokemonId = pokemonPicture.attributes('pokemonid')
		expect(parseInt(pokemonId)).toBe(1)
	})
	test('PokemonOptions attribute pokemon toBe true', () => {
		const pokemonOptions = wrapper.find('pokemon-options-stub')
		const isAnyPokemon = pokemonOptions.attributes('pokemon')
		expect(isAnyPokemon).toBeTruthy()
	})
	test('Should show right answer', async () => {
		await wrapper.vm.checkAnswer(1)
		const correctAnswer = wrapper.find('h2')
		expect(correctAnswer.exists()).toBeTruthy()
		expect(wrapper.vm.showPokemon).toBeTruthy()
		expect(correctAnswer.text()).toBe(`Correct! ${pokemon[0].name}`)

	})
	test('should show wrong Answer', async () => {
		await wrapperCheckAnswer.vm.checkAnswer(3)
		const incorrect = wrapperCheckAnswer.find('h2');
		expect(incorrect.exists()).toBeTruthy();
		expect(wrapperCheckAnswer.vm.showPokemon).toBeFalsy()
		expect(incorrect.text()).toBe(`Incorrect, the pokemon was: ${pokemon[0].name}`)
	})

})