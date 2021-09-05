<template>
  <div class="logo">
    <a href="/">ZLi</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style scoped>
.logo {
  @apply text-2xl font-black text-gray-600;

  line-height: 4rem;
}

.logo:hover {
  @apply text-blue-500;
}
</style>