<template>
  <main class="main">
    <div class="main-content">
      <router-view />
    </div>
    <div class="aside-content">
      <Author />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Author from './components/Author.vue'

export default defineComponent({
  components: {
    Author
  },
  setup() {}
})
</script>

<style scoped>
.main {
  @apply w-full ml-auto mr-auto mt-14 mb-0 p-6 hidden lg:flex;

  max-width: 1200px;
}

.main .main-content {
  @apply w-3/4;
}

.main .aside-content {
  @apply w-1/4;
}
</style>