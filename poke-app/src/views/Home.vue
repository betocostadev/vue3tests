<template>
  <div>
    <div class="w-full flex justify-center">
      <input
        type="text"
        placeholder="Enter Pokemon name"
        class="mt-10 p-2 border-blue-500 border-2"
        v-model="searchTerm"
      />
    </div>
    <div class="mt-10 p4 flex flex-wrap justify-center">
      <div
        class="ml-4 text-2xl text-blue-500"
        v-for="(pokemon, idx) in filteredPokemons"
        :key="idx"
      >
        <router-link :to="`/pokemon/${urlIdLookup[pokemon.name]}`">
          {{ pokemon.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs, computed, onMounted } from 'vue'
import pokemonService from '../services/pokemon'

export default {
  name: 'Home',

  components: {},

  setup() {
    const state = reactive({
      pokemons: [],
      urlIdLookup: {},
      searchTerm: '',
      filteredPokemons: computed(() => updatePokemon()),
    })

    const updatePokemon = () => {
      // console.log('updatePokemon!')
      if (!state.searchTerm.length) return []

      return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.searchTerm.toLowerCase())
      )
    }
    // setup is called right after the initial props resolution when a component instance is created.
    // Lifecycle-wise, it is called before the beforeCreate hook.
    // That's the "fetch" below was called here and not inside the "onMounted" hook
    // https://v3.vuejs.org/api/options-composition.html#setup

    // fetch('https://pokeapi.co/api/v2/pokemon?offset=0')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     state.pokemons = data.results
    //     // console.log(state.pokemons)
    //     state.urlIdLookup = data.results.reduce(
    //       (acc, cur, idx) => (acc = { ...acc, [cur.name]: idx + 1 }),
    //       {}
    //     )
    //   })

    const getPokemons = async () => {
      const results = await pokemonService.getFirstPage()

      state.pokemons = results
      state.urlIdLookup = results.reduce(
        (acc, cur, idx) => (acc = { ...acc, [cur.name]: idx + 1 }),
        {}
      )
    }

    onMounted(() => {
      getPokemons()
    })

    return { ...toRefs(state) }
  },
}
</script>
