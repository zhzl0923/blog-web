<template>
  <div class="divide">
    <Icon icon="fa-solid:cut" class="divide-icon" />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  components: {
    Icon
  },
  setup() {}
})
</script>

<style scoped>
.divide {
  @apply text-blue-400 font-semibold pt-4 pb-4 items-center relative cursor-pointer;

  font-size: 20px;
}

.divide hr {
  @apply border-2 border-dashed border-blue-400;

  margin: 0 auto;
}

.divide .divide-icon {
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 10px;
  transition: all 1s ease-in-out;
}

.divide:hover .divide-icon {
  left: calc(100% - 27px);
}
</style>
