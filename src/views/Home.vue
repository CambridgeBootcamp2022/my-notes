<template>
  <main class="height70p">
    <MyNotes />
  </main>
</template>

<script>
import MyNotes from '../components/Notes.vue'

export default {
  components: {
    MyNotes,
  },
}
</script>

<style scoped>
.height70p {
  height: 70vh;
}
</style>
