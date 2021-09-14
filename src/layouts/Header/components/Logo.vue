<template>
  <div class="logo" @click="() => {}">
    <a href="/">ZZL</a>
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
  @apply pl-4 pr-4 text-xl font-semibold text-gray-800;

  line-height: 4rem;
}

.logo:hover {
  @apply text-blue-500;
}
</style>
