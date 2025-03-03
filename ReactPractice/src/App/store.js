import { configureStore } from '@reduxjs/toolkit'
import mathSlice from '../features/Math/mathSlice'

export const store = configureStore({
    reducer: {
        counter: mathSlice
    }
})