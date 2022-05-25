<template>
    <div class="options-container">
        <ul>
            <!-- hiki means the counter for small or medium animals (pokemon) in japanese -->
            <li v-for="hiki in pokemon" 
            :key="hiki.id" 
            @click="$emit('selection', hiki.id)">
                {{hiki.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemon: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    /* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>