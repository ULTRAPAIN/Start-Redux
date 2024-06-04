
import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
    },

})

/*To get an access to the functions increment and decrement 
which are created in the reducer section, we need to access the
actions because this functions are stored in them*/ 

export const{increment, decrement} = counterSlice.actions
export default counterSlice.reducer

// every slice will create a reducer and actions 