import {createReducer} from "@reduxjs/toolkit"
export const firstreducer = createReducer({
    cartval:0,
},{
    incremwntKar: (state , action)=>{ 

            state.cartval +=1;
    },
    decrementKar: (state , action)=>{
        if(state.cartval>=1)
        {
            state.cartval -=1;
        }
    }
})