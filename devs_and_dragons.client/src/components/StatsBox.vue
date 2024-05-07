<template>
  <div class="container-fluid container">
    <div class="row">
      <div class="col-12 text-black">

        <div class="mt-1">
          <div class="d-flex justify-content-between">
            <p>{{account?.name}}</p>
            <div v-if="myStats">
              <i class="mdi mdi-feather edit-btn selectable" title="Edit your character stats" type="button" data-bs-toggle="modal"
                data-bs-target="#editStats"></i>
            </div>
            <div v-if="hasLink && !myStats">
              <i class="mdi mdi-plus edit-btn selectable" title="Add your character stats" type="button" data-bs-toggle="modal"
                data-bs-target="#addStats"></i>
            </div>
          </div>
          <h4>{{ myStats?.name }}</h4>
        </div>

        <div class="row">
          <div class="d-flex justify-content-between">
            <p class="text-bold">Level: <span>{{ myStats?.level }}</span></p>
            <p class="text-bold">HP: <span>{{myStats?.healthPoints}}</span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="text-bold">Race: <span>{{ myStats?.race }}</span></p>
            <p class="text-bold">AC: <span>{{ myStats?.armorClass }}</span></p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="text-bold">Class: <span>{{ myStats?.class }}</span></p>
            <p class="text-bold">XP: <span>{{ myStats?.experiencePoints }}</span></p>
          </div>
        </div>

        <h4 class="text-decoration-underline text-center">STATS</h4>

        <div class="d-flex align-content-center">
          <p class="text-bold">STRENGTH: </p>
          <h5 class="ms-2">{{ myStats?.strength }}</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">DEXTERITY: </p>
          <h5 class="ms-2">{{myStats?.dexterity}}</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">CONSTITUTION: </p>
          <h5 class="ms-2">{{myStats?.constituion}}</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">INTELLIGENCE: </p>
          <h5 class="ms-2">{{myStats?.intelligence}}</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">WISDOM: </p>
          <h5 class="ms-2">{{myStats?.wisdom}}</h5>
        </div>
        <div class="d-flex align-content-center">
          <p class="text-bold">CHARISMA: </p>
          <h5 class="ms-2">{{myStats?.charisma}}</h5>
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
      account: computed(() => AppState.account),

      hasLink: computed(() => {
        return AppState.AccountLinks.find(l => l.accountId == AppState.account.id)
      }),

      myStats: computed(() => {
        return AppState.Stats.find(s => s.creatorId == AppState.account.id)
      })

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
