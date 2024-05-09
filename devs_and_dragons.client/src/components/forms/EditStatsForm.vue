<template>
  <form @submit.prevent="">

    <div class="mb-3">
      <label for="name" class="form-label">Character Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
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
        <input type="num" class="form-control" v-model="editable.healthPoints" aria-label="Enter Character's Health Points">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">AC:</span>
        <input type="num" class="form-control" v-model="editable.armorClass" aria-label="Enter Character's Armor Class">
      </div>
    </div>

    <div class="d-flex">
      <div class="mb-3 mx-2">
        <span class="input-group-text">STR:</span>
        <input type="num" class="form-control" v-model="editable.strength" aria-label="Enter Character's Strength Modifier">
      </div>
      <div class="mb-3 mx-2">
        <span class="input-group-text">DEX:</span>
        <input type="num" class="form-control" v-model="editable.dexterity" aria-label="Enter Character's Strength Modifier">
      </div>
      <div class="mb-3 mx-2">
        <span class="input-group-text">CON:</span>
        <input type="num" class="form-control" v-model="editable.constitution" aria-label="Enter Character's Strength Modifier">
      </div>
      <div class="mb-3 mx-2">
        <span class="input-group-text">INT:</span>
        <input type="num" class="form-control" v-model="editable.intelligence" aria-label="Enter Character's Strength Modifier">
      </div>
      <div class="mb-3 mx-2">
        <span class="input-group-text">WIS:</span>
        <input type="num" class="form-control" v-model="editable.wisdom" aria-label="Enter Character's Strength Modifier">
      </div>
      <div class="mb-3 mx-2">
        <span class="input-group-text">CHR:</span>
        <input type="num" class="form-control" v-model="editable.charisma" aria-label="Enter Character's Strength Modifier">
      </div>
    </div>

    <button type="submit" class="btn btn-primary" title="Submit">Submit</button>

  </form>
</template>


<script>

import { ref } from "vue";
import { logger } from "../../utils/Logger.js";



export default {
  setup() {
    const editable = ref({})

    return {
      editable,

      characterClass: ['Barbarian', 'Paladin', 'Druid', 'Wizard', 'Fighter', 'Ranger', 'Rogue', 'Bard', 'Sorcerer', 'Warlock', 'Artificer'],

    }
  }
}
</script>


<style lang="scss" scoped>

</style>
