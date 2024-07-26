<template>

    <form @submit.prevent="createCharcter">

    <div class="mb-3">
      <label for="name" class="form-label">Character Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
    </div>

    <div class="mb-3">
      <label for="type">Character Race</label>
      <select class="form-control" v-model="editable.race">
        <option class="text-capitalize" v-for="r in race" :key="r" :value="r">{{ r }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="type">Character Class</label>
      <select class="form-control" v-model="editable.class">
        <option class="text-capitalize" v-for="c in characterClass" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="desc" class="form-label">Character Description</label>
      <textarea v-model="editable.desc" class="form-control" aria-label="CharacterDescription" required
        placeholder="Leave a brief description here"></textarea>
    </div>

    <div class="mb-3 d-flex">
      <div class="input-group mb-3 me-3">
        <span class="input-group-text">HP:</span>
        <input type="num" class="form-control" aria-label="Enter Character's Health Points">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">AC:</span>
        <input type="num" class="form-control" aria-label="Enter Character's Armor Class">
      </div>
    </div>

    <button type="submit" class="btn btn-primary" title="Submit">Submit</button>

  </form>

</template>

<!-- NOTE ADD:
  SEX,

-->


<script>

import { ref } from "vue";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";
import { AppState } from "../../AppState.js";


export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    const data = editable.value

    return {
      editable,
      race: ['Human', 'Elf', 'Half-Elf', 'Dwarf', 'Gnome', 'Halfling', 'Tiefling', 'Half-Orc', 'Dragonborn'],
      characterClass: ['Barbarian', 'Paladin', 'Druid', 'Wizard', 'Fighter', 'Ranger', 'Rogue', 'Bard', 'Sorcerer', 'Warlock', 'Artificer'],



    }
  }
}
</script>


<style lang="scss" scoped>

</style>
