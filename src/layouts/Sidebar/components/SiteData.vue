<template>
  <div class="site-data">
    <router-link @click="hidden" to="/archive" class="site-item">
      <div class="headline">文章</div>
      <div class="num">10</div>
    </router-link>
    <router-link @click="hidden" to="/tags" class="site-item">
      <div class="headline">标签</div>
      <div class="num">20</div>
    </router-link>
    <router-link @click="hidden" to="/categories" class="site-item">
      <div class="headline">分类</div>
      <div class="num">15</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useSidebarStore } from '@store/modules/sidebar'

export default defineComponent({
  setup() {
    const store = useSidebarStore()
    const hidden = () => {
      store.updateHiddenStatus()
    }
    return { hidden }
  }
})
</script>

<style lang="css" scoped>
.site-data {
  @apply table w-full text-center pl-4 pr-4 mt-6;
}

.site-data .site-item {
  @apply table-cell  text-sm text-gray-700 space-y-4 hover:text-blue-500;
}

.site-item .site-item div:last-child {
  @apply text-xs text-blue-700;
}
</style>
