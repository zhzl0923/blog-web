<template>
  <div @click="toggle" class="toggle">
    <span>
      <Icon icon="fa-solid:bars" />
    </span>
  </div>
</template>

 <script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  props: {
    toggle: { type: Function }
  },
  components: {
    Icon
  },
  setup() {
    return {}
  }
})
</script>
 
 <style scoped>
.toggle {
  @apply p-2  cursor-pointer md:hidden;

  line-height: 4rem;
}

.toggle:hover span {
  color: #3b82f6;
}

.toggle span {
  @apply text-lg text-gray-700 font-light;
}
</style>