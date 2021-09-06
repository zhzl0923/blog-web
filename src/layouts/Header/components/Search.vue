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
  @apply flex   items-center h-7  leading-7 flex-shrink-0;
}

.search input {
  border: 1px solid;

  @apply h-7 pl-2 rounded-md border-gray-300 w-52 text-gray-700 text-sm;
  @apply focus:outline-none focus:ring-1 focus:border-blue-500;
}

.search button {
  @apply text-gray-700 hover:text-blue-500;

  position: relative;
  right: 25px;
  z-index: 1;
}
</style>