<template>
  <div class="search" @click="openModal">
    <span class="select-none">
      <Icon icon="fa-solid:search" />
    </span>
    <span class="hidden select-none md:block">搜索</span>
    <Modal ref="searchModal" title="本地搜索"></Modal>
  </div>
</template>

<script lang="ts">
  import {defineComponent , ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { Modal } from '@components/Modal'

  export default defineComponent({
    components: {
      Icon,
      Modal
    },
    setup() {
      const searchModal = ref<InstanceType<typeof Modal>>()
      const openModal = ()=>{
        searchModal.value?.openModal()
      }
     
      return {searchModal,openModal}
    }
  })
</script>

<style scoped>
  .search {
    @apply flex items-center h-16 pl-4 pr-4 flex-shrink-0;
    @apply space-x-2 text-gray-800 hover:bg-gray-100 cursor-pointer;

    line-height: 4rem;
  }
</style>
