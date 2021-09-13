<template>
  <div class="author-info">
    <Avatar />
    <div class="w-full">
      <div class="author-info__name">ZLi</div>
      <div class="author-info__desc">Fear always springs from ignorance</div>
    </div>
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
    <a class="follow button--animated" target="_blank" href="https://github.com/zzl0923">
      <Icon icon="fa-brands:github" />
      <span>Follow Me</span>
    </a>
    <div class="social-icons">
      <a class="social-icon" href="mailto:zzl_0923@163.com" target="_blank" title="邮箱">
        <Icon icon="fa-solid:envelope" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar } from '@components/Avatar'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Avatar,
    Icon
  },
  setup() {}
})
</script>
<style scoped>
.author-info {
  @apply rounded-md bg-white shadow select-none flex flex-col;
  @apply p-5 w-full  flex items-center space-y-4 hover:shadow-lg hover:-translate-y-2;

  transition: all 0.3s;
}

.author-info .author-info__name {
  @apply text-center  font-medium  p-2;

  font-size: 1.57rem;
}

.author-info .author-info__desc {
  @apply text-center p-1;
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

.follow {
  @apply flex w-full items-center justify-center space-x-2;
  @apply bg-blue-500 text-white;

  line-height: 2.2;
  transition: color 1s;
}

.button--animated {
  position: relative;
  z-index: 1;
  transition: color 1s;
}

.button--animated:hover::before {
  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
  transform: scaleX(1);
}

.button--animated::before {
  @apply bg-red-500;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  content: '';
  transition: transform 0.5s ease-out;
  transform: scaleX(0);
  transform-origin: 0 50%;
}

.author-info .social-icons {
  @apply flex text-xl text-gray-700 font-light;
}

.author-info .social-icons .social-icon {
  transition: all 0.2s;
}

.author-info .social-icons .social-icon:hover {
  transform: rotate(540deg);
}
</style>
