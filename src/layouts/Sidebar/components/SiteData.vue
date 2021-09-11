<template>
  <div class="site-data">
    <router-link @click="closeSidebar" to="/archive" class="site-item">
      <div class="headline">文章</div>
      <div class="num">10</div>
    </router-link>
    <router-link @click="closeSidebar" to="/tags" class="site-item">
      <div class="headline">标签</div>
      <div class="num">20</div>
    </router-link>
    <router-link @click="closeSidebar" to="/categories" class="site-item">
      <div class="headline">分类</div>
      <div class="num">15</div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    closeSidebar: { type: Function }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="css" scoped>
.site-data {
  @apply table w-full text-center pl-4 pr-4 mt-6 select-none;
}

.site-data .site-item {
  @apply table-cell  text-sm text-gray-700 space-y-4 hover:text-blue-500 select-none;
}

.site-item .headline {
  @apply text-base;
}

.site-item .num {
  @apply text-xl;
}
</style>
