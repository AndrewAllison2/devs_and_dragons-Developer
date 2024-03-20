<template>
  <div class="container-fluid container">
    <div class="row">
      <div class="col-12 text-black">

        <div class="mt-1">
          <div class="d-flex justify-content-between">
            <p>{{account?.name}}</p>
            <i class="mdi mdi-feather edit-btn selectable"></i>
          </div>
          <h4>Character Name</h4>
        </div>

        <div class="row">
          <div class="d-flex justify-content-between">
            <p class="text-bold">Level: <span>1</span></p>
            <p class="text-bold">HP: <span>24</span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="text-bold">Race: <span>Human</span></p>
            <p class="text-bold">AC: <span>10</span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="text-bold">Class: <span>Wizard</span></p>
            <p class="text-bold">XP: <span>250</span></p>
          </div>
        </div>

        <h4 class="text-decoration-underline text-center">STATS</h4>

        <div class="d-flex align-content-center">
          <p class="text-bold">STRENGTH: </p>
          <h5 class="ms-2">8</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">DEXTERITY: </p>
          <h5 class="ms-2">8</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">CONSTITUTION: </p>
          <h5 class="ms-2">8</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">INTELLIGENCE: </p>
          <h5 class="ms-2">8</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">WISDOM: </p>
          <h5 class="ms-2">8</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">CHARISMA: </p>
          <h5 class="ms-2">8</h5>
        </div>

      </div>
    </div>
  </div>


</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";



export default {

  setup(){
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  background-color: beige;
}
.edit-btn {
  border: 1px solid black;
  border-radius: 5px;
  height: 27px;
  padding: 2px;
}
</style>
