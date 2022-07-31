import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './ui/ui.slice'

export const store = configureStore({
	reducer: {
		ui: uiReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
