<template>
  <a :href="option.path" class="tree-item">
    <div>
      <Icon :icon="option.icon" />
      <span> {{ option.label }} </span>
    </div>
    <span v-if="option.children && option.children.length > 0" @click="expand(option.key)">
      <Icon :icon="option.isExpand ? 'fa-solid:chevron-down' : 'fa-solid:chevron-left'" />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Icon } from '@iconify/vue'
import { TreeOption } from './type'

export default defineComponent({
  props: {
    option: {
      type: Object as PropType<TreeOption>,
      require: true
    },
    expand: {
      type: Function as PropType<(key: string) => void>,
      require: true
    }
  },
  components: { Icon },
  setup() {}
})
</script>

<style scoped>
.tree-item {
  @apply rounded flex justify-between items-center pl-4 pr-4 pb-2 pt-2;
  @apply hover:bg-blue-500 hover:text-white select-none;
}
</style>
