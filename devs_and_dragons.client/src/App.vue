<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>


  <ModalComponent id="createCampaignModal">
    <template #header>

    </template>
    <template #body>
      <CampaignForm />

    </template>
  </ModalComponent>

  <ModalComponent id="createEntityModal">
    <template #header>
      Create Entity
    </template>
    <template #body>
      <EntityCreateForm />

    </template>
  </ModalComponent>

  <ModalComponent id="editAccount">
    <template #header>
      Update Account
    </template>
    <template #body>
      <UpdateAccount />
    </template>
  </ModalComponent>

  <ModalComponent id="createCharacter">
    <template #header>
      Add Character Info
    </template>
    <template #body>
      <CharacterForm />
    </template>
  </ModalComponent>


  <ModalComponent id="createNote">
    <template #header>
      Create a Note
    </template>
    <template #body>
      <CreateNoteForm />
    </template>
  </ModalComponent>

  <ModalComponent id="editNote">
    <template #header>
      Edit Your Note
    </template>
    <template #body>
      <EditNoteForm />
    </template>
  </ModalComponent>

  <ModalComponent id="createRecap">
    <template #header>
      RECAP
    </template>
    <template #body>
      <RecapFormComponent />
    </template>
  </ModalComponent>

  <ModalComponent id="addEntity">
    <template #header>
      ENTITIES
    </template>
    <template #body>
      <EntityListComponent />
    </template>
  </ModalComponent>

  <ModalComponent id="spellsSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <SpellsComponent />
    </template>
  </ModalComponent>
  <ModalComponent id="monstersSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <MonstersComponent />
    </template>
  </ModalComponent>
  <ModalComponent id="classesSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <ClassesComponent />
    </template>
  </ModalComponent>
  <ModalComponent id="backgroundsSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <BackgroundComponent />
    </template>
  </ModalComponent>
  <ModalComponent id="magicItemsSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <MagicItemsComponent />
    </template>
  </ModalComponent>

  <ModalComponent id="equipmentSearch">
    <template #header>
      {{ selectedResult?.name }}
    </template>
    <template #body>
      <EquipmentComponent />
    </template>
  </ModalComponent>
  <ModalComponent id="discordUpdate">
    <template #body>
      <DiscordForm />
    </template>
  </ModalComponent>
  <ModalComponent id="addStats">
    <template #body>
      <AddStatsForm />
    </template>
  </ModalComponent>
  <ModalComponent id="editStats">
    <template #header>
      Edit Stats
    </template>
    <template #body>
      <EditStatsForm />
    </template>
  </ModalComponent>
  <ModalComponent id="entityOptions">
    <template #header>
      Edit Stats
    </template>
    <template #body>
      <EntityOptionsComponent />
    </template>
  </ModalComponent>
</template>


<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ModalComponent from "./components/ModalComponent.vue"
import CampaignForm from './components/forms/CampaignForm.vue'
import EntityCreateForm from './components/forms/EntityCreateForm.vue'
import UpdateAccount from './components/forms/UpdateAccount.vue'
import CreateNoteForm from "./components/forms/CreateNoteForm.vue"
import EditNoteForm from "./components/forms/EditNoteForm.vue"
import RecapFormComponent from "./components/forms/RecapFormComponent.vue"
import EntityListComponent from "./components/EntityListComponent.vue"
import SpellsComponent from './components/search/SpellsComponent.vue'
import MonstersComponent from './components/search/MonstersComponent.vue'
import EquipmentComponent from "./components/search/EquipmentComponent.vue"
import ClassesComponent from './components/search/ClassesComponent.vue'
import MagicItemsComponent from "./components/search/MagicItemsComponent.vue"
import BackgroundComponent from "./components/search/BackgroundComponent.vue"
import DiscordForm from "./components/forms/discordForm.vue"
import CharacterForm from "./components/forms/CharacterForm.vue"
import AddStatsForm from "./components/forms/AddStatsForm.vue"
import EditStatsForm from "./components/forms/EditStatsForm.vue"
import EntityOptionsComponent from "./components/EntityOptionsComponent.vue"



export default {
  setup() {
    return {
      appState: computed(() => AppState),
      selectedResult: computed(() => AppState.selectedResult)
    }
  },
  components: { Navbar, ModalComponent, CampaignForm, EntityCreateForm, UpdateAccount, CreateNoteForm, EditNoteForm, RecapFormComponent, EntityListComponent, EquipmentComponent, SpellsComponent, MonstersComponent, ClassesComponent, MagicItemsComponent, BackgroundComponent, DiscordForm, CharacterForm, AddStatsForm, EditStatsForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}

::-webkit-scrollbar {
  box-shadow: inset 0 0 10px rgb(175, 30, 30);
  // border-radius: 10px;
  width: 25px;
  margin: 3px;
  background-color: black;

}

::-webkit-scrollbar-thumb {
  background-image: url('https://i.pinimg.com/originals/15/d9/15/15d915a12800b3c5d0ec2f739f415996.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
