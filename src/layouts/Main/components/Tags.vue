<template>
  <div class="aside-tags card">
    <div class="aside-tags-title">
      <Icon icon="fa-solid:tags" />
      <span>标签</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.aside-tags {
  @apply pl-6 pr-6 pt-5 pb-5;
}

.aside-tags-title {
  @apply flex items-center text-lg select-none space-x-2;
}
</style>