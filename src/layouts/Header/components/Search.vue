<template>
  <div class="search">
    <input type="text" name="keywords" />
    <button>
      <Icon icon="fa-solid:search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon
  },
  setup() {}
})
</script>

<style scoped>
.search {
  @apply flex  mr-8 items-center h-8  leading-8 flex-shrink-0;
}

.search input {
  border: 1px solid;

  @apply h-8 pl-2 rounded-md border-gray-300 w-52;
  @apply focus:outline-none focus:ring-1 focus:border-blue-500;
}

.search button {
  @apply text-gray-400;

  position: relative;
  right: 25px;
  z-index: 1;
}
</style>