<template>
  <!-- <router-view></router-view> -->
  <Tree />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Tree } from '@components/Tree'

export default defineComponent({
  components: {
    Tree
  },
  setup() {}
})
</script>

