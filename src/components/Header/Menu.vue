<template>
  <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
    <div class="flex-shrink-0 flex items-center"> Zli's Blog </div>
    <div class="hidden sm:block sm:ml-6">
      <div class="flex space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
          v-for="(menu, index) in Menus"
          :key="index"
        >
          {{ menu.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const Menus = [
  {
    title: '首页',
    icon: '',
    isActive: true,
    uri: ''
  },
  {
    title: '分类',
    icon: '',
    isActive: true,
    uri: ''
  },
  {
    title: '标签',
    icon: '',
    isActive: true,
    uri: ''
  },
  {
    title: '归档',
    icon: '',
    isActive: true,
    uri: ''
  },
  {
    title: '关于',
    icon: '',
    isActive: true,
    uri: ''
  }
]
export default defineComponent({
  setup() {
    return { Menus }
  }
})
</script>
