<template>
  <div class="flex justify-center items-center flex-col">
    <div
      v-if="pokemon"
      class="w-4/12 bg-purple-100 mt-4 p-4 shadow-2xl flex justify-center flex-col items-center rounded-md"
    >
      <h3 class="text-2xl text-green-800 uppercase">{{ pokemon.name }}</h3>
      <div class="flex justify-center">
        <img
          :src="pokemon.sprites.front_shiny"
          :alt="`${pokemon.name} front view`"
        />
        <img
          :src="pokemon.sprites.back_shiny"
          :alt="`${pokemon.name} back view`"
        />
      </div>
      <h3 class="text-yellow-600">TYPES</h3>
      <div v-for="(type, idx) in pokemon.types" :key="idx">
        <h5 class="text-blue-900">{{ type.type.name }}</h5>
      </div>

      <h3 class="text-yellow-600 mt-2">ABILITIES</h3>
      <div v-for="(ability, idx) in pokemon.abilities" :key="`ab-${idx}`">
        <h5 class="text-blue-900">{{ ability.ability.name }}</h5>
      </div>
    </div>

    <div class="flex justify-center mt-6">
      <button
        class="text-blue-50 bg-blue-400 border-blue-300 border-2 rounded-md p-2 hover:text-blue-100 hover:bg-blue-600 hover:border-blue-500"
      >
        <router-link to="/">Go to Home</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import pokemonService from '../services/pokemon'

export default {
  setup() {
    const route = useRoute()

    const state = reactive({
      pokemon: null,
    })

    const getPoke = async (id) => {
      const result = await pokemonService.getPokemon(id)

      state.pokemon = result
    }

    onMounted(() => {
      getPoke(route.params.slug)
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
