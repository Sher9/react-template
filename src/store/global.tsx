import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

interface GlobalState {
    token: string
    darkMode: boolean
    collapsed: boolean
    colorPrimary: string
}

interface Action {
    setToken: (key: GlobalState['token']) => void
    clearToken: () => void
    setDarkMode: (darkMode: GlobalState['darkMode']) => void
    setCollapsed: (collapsed: GlobalState['collapsed']) => void
    setColorPrimary: (collapsed: GlobalState['colorPrimary']) => void


}

export const useGlobalStore = create<GlobalState & Action>()(
    immer(
        persist(
            (set) => (
                {
                    token: '',
                    menus: [],
                    darkMode: false,
                    collapsed: true,
                    colorPrimary: "#409eff",
                    setToken: (token) => set({ token }),
                    clearToken: () => set({ token: '' }),
                    setDarkMode: (darkMode) => set({ darkMode }),
                    setCollapsed: (collapsed) => set({ collapsed }),
                    setColorPrimary: (colorPrimary) => set({ colorPrimary }),
                }),
            {
                name: 'globalStore'
            }
        )
    )

)
