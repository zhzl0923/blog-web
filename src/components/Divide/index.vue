<template>
  <hr class="divide" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style scoped>
.divide {
  @apply mt-4 mb-4 ml-auto mr-auto border-2 border-dashed border-blue-400;
}

.divide::before {
  @apply z-30;

  color: #60a5fa;
  content: '\f0c4';
  font-size: 20px;
  line-height: 1;
  transition: all 1s ease-in-out;
}
</style>