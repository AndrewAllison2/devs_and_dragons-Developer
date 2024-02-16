<template>

    <form @submit.prevent="createCharcter">
    <div class="mb-3">
      <label for="name" class="form-label">Character Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
    </div>
    <!-- <div class="mb-3">
      <label for="type">Character Race</label>
      <select class="form-control" v-model="editable.race">
        <option class="text-capitalize" v-for="r in race" :key="r" :value="r">{{ r }}</option>
      </select>
    </div> -->
    <div class="mb-3">
      <label for="desc" class="form-label">Character Description</label>
      <textarea v-model="editable.desc" class="form-control" aria-label="CharacterDescription" required
        placeholder="Leave a brief description here"></textarea>
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Character Body</label>
      <textarea v-model="editable.body" class="form-control" aria-label="CharacterBody" required cols="30" rows="10"
        placeholder="Tell us about your Character"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" title="Submit">Submit</button>
  </form>

</template>


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

    return {
      editable
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
