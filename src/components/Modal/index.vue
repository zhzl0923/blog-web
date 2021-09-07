<template>
<teleport to="body">
  <div :class="{modal:true,hidden:hidden}">
    <div class="modal-mask"></div>
    <div class="modal-content">
      <div class="modal-title">
        <div class="font-medium text-blue-500 select-none">{{ title }}</div>
        <div>
          <button class="text-2xl text-gray-400" @click="closeModal">
            <Icon icon="fa-solid:times" />
          </button>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</teleport>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Icon } from '@iconify/vue'

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '本地搜索'
      }
    },
    components: {
      Icon
    },
    setup() {
      const hidden= ref(true)
      const closeModal = ()=>{
        hidden.value = true
      }

      const openModal = () => {
        hidden.value = false
      }


      return {hidden,closeModal,openModal}
    }
  })
</script>

<style scoped>
  .modal {
    @apply fixed left-0 top-0 z-30;
  }

  .modal .modal-mask {
    @apply w-screen h-screen bg-black bg-opacity-60;
  }

  .modal .modal-content {
    @apply fixed z-40 bg-white top-28 rounded-md p-5;

    width: 30rem;
    height: 50%;
    left: calc((100% - 30rem) / 2);
  }

  .modal .modal-title {
    @apply flex justify-between text-lg;
  }
</style>
