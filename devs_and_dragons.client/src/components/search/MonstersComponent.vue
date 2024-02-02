<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-12" v-if="monster?.url.includes('monsters')">
                <div>
                    <div class="d-flex justify-content-between">
                        <div>
                            {{ monster.size }} <span>{{ monster.type }}</span>
                        </div>
                        <span class="text-warning">XP: {{ monster.xp }}</span>
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
                        Alignment: {{ monster.alignment }}
                    </div>
                    
                    <div class="mt-2">
                        Speed: {{ monster.speed.walk }} walk
                        <span v-if="monster.speed?.climb"> {{ monster.speed.climb }} climb</span>
                        <span v-if="monster.speed?.swim"> {{ monster.speed.swim }} swim</span>
                        <span v-if="monster.speed?.fly"> {{ monster.speed.fly }} fly</span>
                        <span v-if="monster.speed.burrow"> {{ monster.speed.burrow }} burrow</span>
                    </div>
                    <div class="mt-2">
                        Challenge Rating: {{ monster.challenge_rating }}
                    </div>

                    <div v-if="monster.desc">
                        <div class="line-break mt-3"></div>
                            <div class="mt-2">
                                <p class="text-center">{{ monster.desc }}</p>
                            </div>
                        <div class="line-break mb-3"></div>
                    </div>

                    <div v-else>
                        <div class="line-break mt-3"></div>
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

                    <div class="line-break my-3"></div>

                    <div v-if="monster.actions">

                        <h5 class="text-decoration-underline">Actions</h5>

                        <div  v-for="actions in monster" :key="actions.name">>
                            <div>
                                <span class="text-warning">{{actions.name }}:</span>
                                {{ actions.desc }}
                            </div>
                            <!-- <div class="mt-2">
                                <span class="text-warning">{{ monster.actions[1]?.name }}:</span>
                                {{ monster.actions[1]?.desc }}
                            </div>
                            <div class="mt-2">
                                <span class="text-warning">{{ monster.actions[2]?.name }}:</span>
                                {{ monster.actions[2]?.desc }}
                            </div> -->
                        </div>
                    </div>

                    <div class="mt-3">
                        <h5 class="text-decoration-underline">Abilities</h5>
                        <div>
                            <span class="text-success">{{monster.special_abilities[0]?.name}}:</span>
                            {{ monster.special_abilities[0]?.desc }}
                        </div>
                        <div class="mt-2">
                            <span class="text-success">{{ monster.special_abilities[1]?.name }}:</span>
                            {{ monster.special_abilities[1]?.desc }}
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
import { AppState } from '../../AppState.js';

export default {
    setup() {
        return {
            monster: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped>
.line-break{
    border-top: 2px solid white;
    width: 100%;
    
}
</style>