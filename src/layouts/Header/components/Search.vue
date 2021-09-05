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
