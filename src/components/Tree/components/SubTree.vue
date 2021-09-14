<template>
  <ul :class="{ 'sub-tree': true, hidden: !isExpand }" v-if="options.length > 0">
    <li v-for="option in options" :key="option.key">
      <tree-item :option="option" :expand="expand" />
      <sub-tree :options="option.children" :expand="expand" :isExpand="option.isExpand" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Icon } from '@iconify/vue'
import { TreeOption } from './type'
import TreeItem from './TreeItem.vue'

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<TreeOption[]>,
      default: []
    },
    expand: {
      type: Function as PropType<(key: string) => void>,
      require: true
    },
    isExpand: {
      type: Boolean,
      require: true
    }
  },
  components: {
    Icon,
    TreeItem
  },
  setup() {}
})
</script>

<style scoped>
.sub-tree {
  @apply ml-8;
}
</style>
