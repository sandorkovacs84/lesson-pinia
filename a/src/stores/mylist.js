import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const myListStore = defineStore('mylist', () => {

    const myList = ref([])

    const add = item => {
        myList.value.push(item)
    }

    const remove = item => {
        const index = myList.value.indexOf(item)
        myList.value.splice(index, 1)
    }

    const completedList = computed (() => myList.value.filter(item => item.completed))
    const incompleteList = computed (() => myList.value.filter(item => !item.completed))

    return {
        myList,
        add,
        remove,
        toggle,
        completedList,
        incompleteList
    }
})