<template>
  <div class="shadow w-2/5 mt-10 mb-0 ml-auto mr-auto border">
    <div v-for="option in data" :key="option.key">
      <tree-item :option="option" :expand="expand" />
      <sub-tree :options="option.children" :isExpand="option.isExpand" :expand="expand" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { TreeOption } from './components/type'
import TreeItem from './components/TreeItem.vue'
import SubTree from './components/SubTree.vue'

const tree: TreeOption[] = [
  {
    key: '1',
    label: 'tree-1',
    path: '#',
    icon: '',
    isExpand: true,
    children: [
      {
        key: '1-1',
        label: 'tree-1-1',
        path: '#',
        icon: '',
        children: [
          {
            key: '1-1-1',
            label: 'tree-1-1-1',
            path: '#',
            icon: ''
          },
          {
            key: '1-1-2',
            label: 'tree-1-1-2',
            path: '#',
            icon: ''
          },
          {
            key: '1-1-3',
            label: 'tree-1-1-3',
            path: '#',
            icon: ''
          }
        ]
      },
      {
        key: '1-2',
        label: 'tree-1-2',
        path: '#',
        icon: ''
      },
      {
        key: '1-3',
        label: 'tree-1-3',
        path: '#',
        icon: ''
      }
    ]
  }
]

export default defineComponent({
  props: {
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Icon,
    TreeItem,
    SubTree
  },
  setup() {
    const data = ref<TreeOption[]>(tree)
    const updateTreeExpand = (key: string, tree: TreeOption[] | undefined) => {
      if (!tree) {
        return []
      }
      for (let index = 0; index < tree.length; index++) {
        if (tree[index].key === key) {
          tree[index].isExpand = !tree[index].isExpand
          break
        }
        if (tree[index].children !== undefined) {
          tree[index].children = updateTreeExpand(key, tree[index].children)
        }
      }
      return tree
    }
    const expand = (key: string) => {
      data.value = updateTreeExpand(key, data.value)
    }
    return { data, expand }
  }
})
</script>

