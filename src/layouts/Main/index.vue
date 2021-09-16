<template>
  <main class="main">
    <div class="main-content">
      <router-view />
    </div>
    <div class="aside-content">
      <Author />
      <Category />
      <Tag />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Author from './components/Author.vue'
import Category from './components/Category.vue'
import Tag from './components/Tags.vue'

export default defineComponent({
  components: {
    Author,
    Category,
    Tag
  },
  setup() {}
})
</script>

<style scoped>
.main {
  @apply w-full ml-auto mr-auto mt-14 mb-0 p-6 hidden lg:flex;

  margin-top: 7.5rem;
  max-width: 1200px;
}

.main .main-content {
  @apply w-3/4;
}

.main .aside-content {
  @apply w-1/4 flex flex-col space-y-6;
}
</style>