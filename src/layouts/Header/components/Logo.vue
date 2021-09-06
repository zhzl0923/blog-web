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
  @apply text-lg font-semibold text-gray-700;

  line-height: 4rem;
}

.logo:hover {
  @apply text-blue-500;
}
</style>