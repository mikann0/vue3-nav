<script setup>
import CardStat from './CardStat.vue';

const props = defineProps({
    team: {
        type: Object
    }
})

</script>
<template>
    <div class="team_member">
        <div class="team_img">
            <img :src="`src/assets/img/${team.profilePic}`" alt="Team_image">
        </div>
        <h3>{{ team.firstName + ' ' + team.lastName }}</h3>
        <p class="role">{{ team.jobTitle }}</p>
        <p>{{ team.verbatim }}</p>
        <CardStat :stack="team.stack" />
    </div>
</template>
<style scoped>
.team .team_member {
    background: #fff;
    margin: 5px;
    margin-bottom: 50px;
    width: 300px;
    padding: 20px;
    line-height: 20px;
    color: #8e8b8b;
    position: relative;
    /* display: flex;
  flex-direction: column; */
}

.team .team_member h3 {
    color: #81c644;
    font-size: 26px;
    margin-top: 50px;
}

.team .team_member p.role {
    color: #ccc;
    margin: 12px 0;
    font-size: 12px;
    text-transform: uppercase;
}

.team .team_member .team_img {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
}

.team .team_member .team_img img {
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 50%;
}
</style>