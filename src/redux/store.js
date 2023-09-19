import {configureStore} from "@reduxjs/toolkit"
import { firstreducer } from "./reducer";
const store = configureStore({
    reducer : {
        first : firstreducer
    },
})
export default store; 