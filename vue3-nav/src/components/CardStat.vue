<script setup>
const props = defineProps({
    stack: {
        type: Array
    }
})

const showStars = (level) => "⭐".repeat(level)

</script>
<template>
    <div class="card-stats">
        <div class="stat">
            <div class="techno">{{ stack[0].label }}</div>
            <div class="level">{{ showStars(stack[0].level) }}</div>
        </div>
        <div class="stat border">
            <div class="techno">{{ stack[1].label }}</div>
            <div class="level">{{ showStars(stack[1].level) }}</div>
        </div>
    </div>
</template>
<style scoped>
.card-stats {
    display: flex;
    /* border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px; */
    justify-content: center;
    background: rgb(255, 7, 110);
}

.card-stats .stat {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
}

.card-stats .border {
    border-left: 1px solid rgb(172, 26, 87);
}

.card-stats .techno {
    font-size: 18px;
    font-weight: 500;
}

.card-stats .level {
    font-size: 15px;
}
</style>