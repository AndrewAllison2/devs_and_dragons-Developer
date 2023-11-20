<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-11" v-if="monster?.url.includes('monsters')">
                <div>
                    <div>
                        {{ monster.size }} <span>{{ monster.type }}</span>
                    </div>
                    <div class="mt-2">
                        Alignment: {{ monster.alignment }}
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                        <div>
                            Hit Points: <span class="text-danger">{{ monster.hit_points }}</span> ({{ monster.hit_points_roll }})
                        </div>
                        <div>
                            AC: {{ monster.armor_class[0].value }}
                        </div>
                    </div>
                    
                    
                    <div class="mt-2">
                        Speed: {{ monster.speed.walk }}
                        <span v-if="monster.speed?.swim">swim {{ monster.speed.swim }} </span>
                        <span v-if="monster.speed?.fly">fly {{ monster.speed.fly }} </span>
                        <span v-if="monster.speed.burrow">burrow {{ monster.speed.burrow }}</span>
                    </div>
                    <div class="mt-2">
                        Challenge Rating: {{ monster.challenge_rating }}
                    </div>

                    <div class="mt-2 text-center">
                            <h5 class="text-decoration-underline">Base Stats</h5>
                        
                            <div class="d-flex flex-column">
                                <div>Strength: {{ monster.strength }}</div>
                                <div class="mt-1">Dexterity: {{ monster.dexterity }}</div>
                                <div class="mt-1">Constitution: {{ monster.constitution }}</div>
                                <div class="mt-1">Intelligence: {{ monster.intelligence }}</div>
                                <div class="mt-1">Wisdom: {{ monster.wisdom }}</div>
                                <div class="mt-1">Charisma: {{ monster.charisma }}</div>
                            </div>
                    </div>

                    <div>
                        <h5>Actions</h5>
                        <div>
                            <div class="d-flex justify-content-around">
                                <div>{{ monster.actions[0].name }}</div>
                                <div>{{ monster.actions[0].desc }}</div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <!-- <p>{{ monster.image }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        return {
            monster: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped></style>