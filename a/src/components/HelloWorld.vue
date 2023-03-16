<script setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()

defineProps({
  msg: String,
})

</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="counter.count++">count is {{ counter.count }}</button>
    </div>
</div>

</template>
