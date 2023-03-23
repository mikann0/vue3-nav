<script setup>
import { ref } from 'vue';

const menu = [
  {
    name:'home',
    label:'Home'
  },
  {
    name:'temoignages',
    label:'Témoignages'
  },
  {
    name:'rates',
    label:'Rates'
  },
  {
    name:'teams',
    label:'Teams'
  },
]

const localMenu = ref(menu)

</script>

<template>

    <nav>
        <ul class='mymenu'>
          <li v-for="link in localMenu" :key="link.name">
            <RouterLink :to="{name:link.name}">{{link.label}}</RouterLink>
          </li>
            <!-- <li>
              <RouterLink :to="{name:'home'}">Home</RouterLink>

            </li>
            <li>
              <RouterLink :to="{name:'temoignages'}">Témoignages</RouterLink>

            </li>
            <li>
              <RouterLink :to="{name:'rates'}">Rates</RouterLink>

            </li>
            <li>
              <RouterLink :to="{name:'teams'}">Teams</RouterLink>
            </li> -->
        </ul>

    </nav>
    </template>

<style scoped>
.router-link-active{
  background-color: green;
  border: solid 1px lawngreen;
}
.router-link-active:after{
  content:"😜";
}

</style>
 