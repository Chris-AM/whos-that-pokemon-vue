<template>
<h1 v-if="!pokemon">Please wait...</h1>
<div v-else>
    <h1>Who's That pokemon!?</h1>
    <PokemonPicture class="fade-in" :pokemonId="pokemon.id" 
                    :showPokemon="showPokemon" />
    <PokemonOptions :pokemon="pokemonArr"
                    @selection="checkAnswer($event)"/>
<div class="showAnswerContainer" v-if="showAnswer">
    <h2 class="fade-in">{{message}}</h2>
    <button  @click="newGame" >Start Again</button>
</div>
</div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: 'message'
        }
    },
    methods: {
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4 );
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(pokedex) {
            this.showAnswer = true
            if(this.pokemon.id === pokedex){
                this.message = `Correct! ${this.pokemon.name}`
                this.showPokemon = true
            }else{
                this.message = `Incorrect, the pokemon was: ${this.pokemon.name}`
                this.showAnswer = true
            }
        },
        newGame(){
            location.reload()
        }
    },
    mounted() {
        this.mixPokemonArr()
    }
}
</script>

<style>
</style>