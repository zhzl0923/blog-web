import { defineStore } from 'pinia'

interface ISidebarState {
  hiddenStatus: boolean
}

export const useSidebarStore = defineStore('sidebar', {
  state: (): ISidebarState => ({
    hiddenStatus: true
  }),
  getters: {
    hidden: (state): boolean => {
      return state.hiddenStatus
    }
  },
  actions: {
    updateHiddenStatus(): void {
      this.hiddenStatus = !this.hiddenStatus
    }
  }
})
