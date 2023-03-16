<script setup>
import { myListStore } from '../stores/mylist.js'
import { ref, computed } from 'vue'


const store = myListStore()
  
const newList = ref('')

const myList = computed(() => store.myList)
const completedList = computed(() => store.completedList)
const incompleteList = computed(() => store.incompleteList)

const addItem = () => {
    if (newList.value.trim() === '') return

    store.add({ id: Date.now(), text: newList.value, completed: false })
    newList.value = ''
}

const toggle = (item) => {
    store.toggle(item)
}

const remove = (item) => {
    store.remove(item)
}

</script>
  
<template>
    <div>
        {{  myList }}
      <input v-model="newList" @keydown.enter="addItem" />
      <ul>
        <li v-for="item in myList" :key="item.id">
          <input type="checkbox" v-model="item.completed" @change="toggle(item)" />
          <span :class="{ 'completed': item.completed }">{{ item.text }}</span>
          <button @click="remove(item)">Remove</button>
        </li>
      </ul>
      <p>Completed Todos: {{ completedList.length }}</p>
      <p>Incomplete Todos: {{ incompleteList.length }}</p>
    </div>
  </template>
  
