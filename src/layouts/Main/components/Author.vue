<template>
  <div class="author-info">
    <Avatar />
    <div class="text-center text-xl">ZLi</div>
    <div class="text-center text-sm">大道至简</div>
    <div class="article-info">
      <router-link @click="closeSidebar" to="/archive" class="article-info-item">
        <div class="headline">文章</div>
        <div class="num">10</div>
      </router-link>
      <router-link @click="closeSidebar" to="/tags" class="article-info-item">
        <div class="headline">标签</div>
        <div class="num">20</div>
      </router-link>
      <router-link @click="closeSidebar" to="/categories" class="article-info-item">
        <div class="headline">分类</div>
        <div class="num">15</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar } from '@components/Avatar'

export default defineComponent({
  components: {
    Avatar
  },
  setup() {}
})
</script>
<style scoped>
.author-info {
  @apply rounded-md bg-white shadow-sm select-none flex flex-col;
  @apply p-3 w-full  flex items-center space-y-4;
}

.author-info .article-info {
  @apply table w-full text-center pl-4 pr-4 mt-6 select-none;
}

.author-info .article-info .article-info-item {
  @apply table-cell   space-y-2 hover:text-blue-500 select-none;
  @apply text-gray-700 font-medium;
}

.article-info-item .headline {
  @apply text-base;
}

.article-info-item .num {
  @apply text-xl;
}
</style>
