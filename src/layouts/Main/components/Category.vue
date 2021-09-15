<template>
  <div class="aside-category card">
    <div class="aside-category-title">
      <Icon icon="fa-solid:folder-open" />
      <span>分类</span>
    </div>
    <div class="text-sm mt-5">
      <Tree :tree="category" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Tree, TreeOption } from '@components/Tree'
import { Icon } from '@iconify/vue'

const category: TreeOption[] = [
  {
    key: '1',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  },
  {
    key: '2',
    label: 'PHP',
    path: '',
    icon: ''
  },
  {
    key: '3',
    label: 'Golang',
    path: '',
    icon: ''
  },
  {
    key: '4',
    label: 'Vue',
    path: '',
    icon: ''
  }
]

export default defineComponent({
  components: {
    Tree,
    Icon
  },
  setup() {
    return { category }
  }
})
</script>

<style scoped>
.aside-category {
  @apply pl-6 pr-6 pt-5 pb-5;
}

.aside-category-title {
  @apply flex items-center text-lg select-none space-x-2;
}
</style>