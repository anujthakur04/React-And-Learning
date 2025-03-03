import { createSlice } from '@reduxjs/toolkit';
export const mathSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },
    },
})

export const { increment, decrement, incrementByAmount } = mathSlice.actions
export default mathSlice.reducer 