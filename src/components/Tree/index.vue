<template>
  <div class="max-w-sm">
    <div v-for="option in data" :key="option.key">
      <tree-item :option="option" :expand="expand" />
      <sub-tree :options="option.children" :isExpand="option.isExpand" :expand="expand" />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, PropType } from 'vue'
import { Icon } from '@iconify/vue'
import { TreeOption } from './components/type'
import TreeItem from './components/TreeItem.vue'
import SubTree from './components/SubTree.vue'

export default defineComponent({
  props: {
    tree: {
      type: Array as PropType<TreeOption[]>,
      default: []
    },
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
  setup(props) {
    const data = ref<TreeOption[]>(props.tree)

    const updateTreeExpand = (key: string, tree: TreeOption[] | undefined) => {
      if (!tree) {
        return []
      }
      for (let index = 0; index < tree.length; index++) {
        if (tree[index].key === key) {
          tree[index].isExpand = !tree[index].isExpand
          break
        }
        tree[index].children = updateTreeExpand(key, tree[index].children)
      }
      return tree
    }

    const expandAll = (tree: TreeOption[] | undefined) => {
      if (!tree) {
        return []
      }
      for (let index = 0; index < tree.length; index++) {
        tree[index].isExpand = true
        tree[index].children = expandAll(tree[index].children)
      }
      return tree
    }

    if (props.expandAll) {
      data.value = expandAll(data.value)
    }

    const expand = (key: string) => {
      data.value = updateTreeExpand(key, data.value)
    }
    return { data, expand }
  }
})
</script>

