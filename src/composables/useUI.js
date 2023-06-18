import { useSideMenuStore } from '../stores/sideMenu-store'
import { computed } from 'vue'

const useUI = () => {

  const store = useSideMenuStore()

  return {
    // sideMenuOpen: computed(() => store.getSideMenuStatus),
    sideMenuOpen: computed({
      get() {
        return store.getSideMenuStatus
      },

      set(value) {
        store.toggleSideMenuStatus()
      }
    }),

    toggleSideMenu: () => store.toggleSideMenuStatus()
  }
}

export default useUI
